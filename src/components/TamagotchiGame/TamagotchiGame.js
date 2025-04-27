import React, {useState, useEffect, useRef, useCallback} from 'react';
// Import MUI components used
import {
  Box, 
  Button, 
  ButtonGroup, 
  CssBaseline, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  Grid, 
  Paper, 
  Typography,
  LinearProgress // <<< Add LinearProgress here
} from '@mui/material';
// Import game specific assets and components
import Character from './Character';
import LinearProgressWithLabel from './LinearProgressWithLabel';
import disasterPet from './assets/character/disaster-pet.svg';
import exercisePet from './assets/character/exercise-pet.svg';
import foodPet from './assets/character/food-pet.svg';
import mischiefPet from './assets/character/mischief-pet.svg';
import sickPet from './assets/character/sick-pet.svg';
import tricksPet from './assets/character/tricks-pet.svg';
import welcomePet from './assets/character/welcome-pet.svg';
import happyPet from './assets/character/happy-pet.svg';
import sadPet from './assets/character/sad-pet.svg';
import adultPet from './assets/character/older/adult-chicken.png'; // Import adult image
import oldPet from './assets/character/older/old-chick.png'; // Import old image
import {accurateInterval} from './utils/helpers.js';
import { Link } from '@mui/material'; // Import Link component
import StatsOverlay from './StatsOverlay';

//Helper functions

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else if (response.status === 429){
    return Promise.resolve(response)
  }else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json()
}

const MAX_STAT = 100;
const MIN_STAT = 0;
const TARGET_LIFESPAN_YEARS = 7.5;
const TARGET_DURATION_MS = 180 * 1000; // 3 minutes
const DAY_DURATION_MS = 1000; // Assuming 1 tick per second
const TOTAL_TICKS = TARGET_DURATION_MS / DAY_DURATION_MS;
const AGE_INCREMENT_PER_TICK = TARGET_LIFESPAN_YEARS / TOTAL_TICKS;

const stayInRange = (value) => Math.max(MIN_STAT, Math.min(MAX_STAT, value));

const SICKNESS_THRESHOLD = 50; 

const getCharacter = (eventType) => {

  let eventGraphic;

  switch(eventType) {
    case 'Natural Disaster':
      eventGraphic = disasterPet;
      break;
    case 'Food':
      eventGraphic = foodPet;
      break;
    case 'Mischief':
      eventGraphic = mischiefPet;
      break;
    case 'Disease':
      eventGraphic = sickPet;
      break;
    case 'Tricks':
      eventGraphic = tricksPet;
      break;
    case 'Exercise':
      eventGraphic = exercisePet;
      break;
    default:
      eventGraphic = welcomePet;
  }

  return eventGraphic;
}

export default function TamagotchiGame({ scrollY }) {

  const [name, setName] = useState('Pippin');
  const [age, setAge] = useState(0); // Age in years
  const [health, setHealth] = useState((80 + 80) / 2); // Initial health is average
  const [hunger, setHunger] = useState(80);
  const [happiness, setHappiness] = useState(80);
  const [gameEnd, setGameEnd] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [petImage, setPetImage] = useState(null); 
  const [actionImage, setActionImage] = useState(null); 
  const [overfedAmount, setOverfedAmount] = useState(0);
  const [isSick, setIsSick] = useState(false);
  const [exerciseLevel, setExerciseLevel] = useState(50); // Added exercise state
  const [timeScale, setTimeScale] = useState(1); // State for time speed
  const timeoutRef = useRef(null);
  const eventTimeoutRef = useRef(null);
  const actionTimeoutRef = useRef(null); 
  const gameGridRef = useRef(null); // Ref for the main game grid
  const [isGameVisible, setIsGameVisible] = useState(true); // State for visibility
  const dayDuration = useRef(DAY_DURATION_MS); // Use ref if it might change, or just use constant
  const [pooCount, setPooCount] = useState(0);

  // Effect for Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state based on whether the element is intersecting the viewport
        setIsGameVisible(entry.isIntersecting);
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% is visible/invisible
      }
    );

    const currentRef = gameGridRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup observer on component unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  const beginLife = useCallback(() => {
    // Clear any existing interval before starting a new one
    if (timeoutRef.current) {
      timeoutRef.current.cancel();
    }

    console.log(`Starting interval with duration: ${dayDuration.current / timeScale}ms (Scale: ${timeScale}x)`);

    timeoutRef.current = accurateInterval(() => {
      petDay();
    }, dayDuration.current / timeScale); // Use timeScale here
  }, [gameEnd, dayDuration, timeScale]); // Add timeScale dependency

  const handleNextEvent = (nextEvent) => {
    if (timeoutRef.current !== null) {
      let nextEventInfo = accurateInterval(() => {
        getNextEvent();
      }, nextEvent)
      eventTimeoutRef.current = nextEventInfo;
    }
  }

  const getNextEvent = () => {

    fetch('https://www.virtual-pet.uk/v1/event')
      .then(status)
      .then(json)
      .then(function(data) {
        if(data.type === 'Error'){
          console.log('Request failed', data);
          if (eventTimeoutRef.current) {
            eventTimeoutRef.current.cancel();
            eventTimeoutRef.current = null;
          }
          handleNextEvent(data.nextEvent * dayDuration.current);
        } else {
          console.log('Request succeeded with JSON response', data);
          setHealth((prev) => stayInRange(prev + data.impact.health));
          setHunger((prev) => stayInRange(prev + data.impact.hunger));
          setHappiness((prev) => stayInRange(prev + data.impact.happiness));
          console.log(`Event: ${data.type.toUpperCase()}! ${data.title}: ${data.description} Impact:`, data.impact);
          if (eventTimeoutRef.current) {
            eventTimeoutRef.current.cancel();
            eventTimeoutRef.current = null;
          }
          handleNextEvent(data.nextEvent * dayDuration.current); 
        }

      }).catch(function(error) {
        console.log('Request failed', error);
      });

  }

  const petDay = () => {
    // Increment age in years based on calculated increment
    setAge((prev) => prev + AGE_INCREMENT_PER_TICK);

    let healthDecayRate = 1;
    let hungerDecayRate = 1.5; // Slightly faster hunger decay
    let happinessDecayRate = 1;

    // Increase decay rates based on negative conditions
    if (isSick) {
      healthDecayRate += 2;
      hungerDecayRate += 1;
      happinessDecayRate += 2;
    }
    if (pooCount > 0) {
      // Poo impacts happiness more significantly and slightly increases hunger decay
      healthDecayRate += pooCount * 0.5; // Poo still slightly impacts overall health decay factors indirectly
      happinessDecayRate += pooCount * 1.5; 
      hungerDecayRate += pooCount * 0.5;
    }

    // Apply decay
    // setHealth((prev) => stayInRange(prev - healthDecayRate)); // REMOVED: Health is now derived
    setHunger((prev) => stayInRange(prev - hungerDecayRate));
    setHappiness((prev) => stayInRange(prev - happinessDecayRate));

    // Random chance for poo if hunger is not critically low
    if (hunger > 20 && Math.random() < 0.1) {
      setPooCount(prev => prev + 1);
    }
    
    // Check if overfeeding causes sickness
    if (overfedAmount > SICKNESS_THRESHOLD && !isSick) {
      setIsSick(true);
      // Maybe trigger a specific sickness event/message here later?
      console.log("Pet got sick from overfeeding!");
    }

    // Check if sickness is cured (overfed amount reduced sufficiently)
    if (isSick && overfedAmount <= SICKNESS_THRESHOLD / 2) { // Recover when below half threshold
      setIsSick(false);
      console.log("Pet recovered from sickness!");
    }
  }

  const cleanPet = () => {
    if (!gameEnd) {
      // setHealth((prev) => stayInRange(prev + 15)); // REMOVED: Health boost removed
      setActionImage(exercisePet); 
      if (actionTimeoutRef.current) clearTimeout(actionTimeoutRef.current);
      actionTimeoutRef.current = setTimeout(() => {
        setActionImage(null);
      }, 1500); 
    }
  }

  const feedPet = () => {
    if (!gameEnd) {
      setHunger((prevHunger) => {
        const foodValue = 15;
        const potentialHunger = prevHunger + foodValue;
        const newHunger = stayInRange(potentialHunger);
        const excessFood = Math.max(0, potentialHunger - newHunger); // Calculate excess food

        if (excessFood > 0) {
          setOverfedAmount(prevOverfed => prevOverfed + excessFood);
          console.log(`Overfed by ${excessFood.toFixed(1)}. Total overfed: ${(overfedAmount + excessFood).toFixed(1)}`);
        }
        
        return newHunger; // Return the new hunger value capped at MAX_STAT
      });

      setActionImage(foodPet); 
      if (actionTimeoutRef.current) clearTimeout(actionTimeoutRef.current);
      actionTimeoutRef.current = setTimeout(() => {
        setActionImage(null);
      }, 1500); 
    }
  }

  const playPet = () => {
    if (!gameEnd) {
      setHunger((prev) => stayInRange(prev - 3));
      setHappiness((prev) => stayInRange(prev + 20));
      setActionImage(tricksPet); 
      if (actionTimeoutRef.current) clearTimeout(actionTimeoutRef.current);
      actionTimeoutRef.current = setTimeout(() => {
        setActionImage(null);
      }, 1500); 
    }
  }

  const cleanPoo = () => {
    if (!gameEnd && pooCount > 0) { // Ensure there is poo to clean
      setPooCount(prev => prev - 1);
      // setHealth((prev) => stayInRange(prev + 5)); // REMOVED: Health boost removed
      // Maybe add a small happiness boost for being clean?
      setHappiness((prev) => stayInRange(prev + 10)); 
      setActionImage(exercisePet); 
      if (actionTimeoutRef.current) clearTimeout(actionTimeoutRef.current);
      actionTimeoutRef.current = setTimeout(() => {
        setActionImage(null);
      }, 1500); 
    }
  }

  const healPet = () => {
    if (!gameEnd && isSick) { // Ensure pet is sick
      setIsSick(false);
      // setHealth((prev) => stayInRange(prev + 20)); // REMOVED: Health boost removed
      // Healing makes the pet happier
      setHappiness((prev) => stayInRange(prev + 15));
      setActionImage(exercisePet); 
      if (actionTimeoutRef.current) clearTimeout(actionTimeoutRef.current);
      actionTimeoutRef.current = setTimeout(() => {
        setActionImage(null);
      }, 1500); 
    }
  }

  const handleBarClick = (statType) => {
    if (!gameEnd) {
      switch (statType) {
        // case 'health': // REMOVED: Cannot directly click health bar
        // setHealth((prev) => stayInRange(prev + 10)); 
        // break;
        case 'hunger':
          feedPet(); // Clicking hunger bar feeds the pet
          break;
        case 'happiness':
          setHappiness(prev => stayInRange(prev + 10));
          break;
        default:
          console.warn("Unknown statType clicked:", statType);
      }
      // Consider adding brief visual feedback here if desired
    }
  };

  const resetGame = () => {   
    setAge(0);
    setHunger(80);
    setHappiness(80);
    // Calculate health based on reset hunger/happiness
    setHealth(stayInRange((80 + 80) / 2));
    setGameEnd(false);
    setOverfedAmount(0); 
    setIsSick(false); 
    setPooCount(0);
    // setDialogOpen(false); // Dialog already handled/commented
    cleanup(); // Ensure timers are stopped
    
    // Restart game loops
    beginLife();
    handleNextEvent(5 * dayDuration.current);
  }

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const cleanup = () => {
    if (timeoutRef.current) {
      timeoutRef.current.cancel();
    }
    if (eventTimeoutRef.current) {
      eventTimeoutRef.current.cancel();
    }
    if (actionTimeoutRef.current) {
      clearTimeout(actionTimeoutRef.current);
    }

    timeoutRef.current = null;
    eventTimeoutRef.current = null;
    actionTimeoutRef.current = null;
  }

  useEffect(() => {
    if (health <= 0 ) {   
      // setDialogOpen(true); // Prevent dialog from opening
      setGameEnd(true);
    }
  }, [health]);

  useEffect(() => {
    if (!gameEnd) {       
      beginLife(); 

      handleNextEvent(5 * dayDuration.current); 

    } else {
      cleanup();
    }

    return cleanup;

  }, [gameEnd]);

  useEffect(() => {
    let currentImage = welcomePet; // Default image

    if (gameEnd) {
      currentImage = disasterPet;
    } else if (isSick) {
      currentImage = sickPet;
    } else if (age >= 5) { // Check for old age first
      currentImage = oldPet;
      console.log(`Age ${age.toFixed(1)} >= 5, using oldPet`); // Log age condition
    } else if (age >= 3.6) { // Then check for adult age
      currentImage = adultPet;
      console.log(`Age ${age.toFixed(1)} >= 3.6, using adultPet`); // Log age condition
    } else { // Otherwise, use stat-based logic
      if (health < 30 || happiness < 30) {
        currentImage = sadPet;
      } else if (hunger < 30) {
        currentImage = foodPet;
      } else if (happiness > 70) {
        currentImage = happyPet;
      } else {
        currentImage = welcomePet;
      }
    }
    
    console.log("Setting petImage to:", currentImage); // Log the chosen image
    setPetImage(currentImage);
  }, [health, happiness, hunger, isSick, gameEnd, age]); // Add age to dependencies

  const toggleTimeScale = () => {
    setTimeScale(prevScale => (prevScale === 1 ? 10 : 1));
  };

  // Effect to derive health from hunger and happiness
  useEffect(() => {
    if (!gameEnd) {
      const newHealth = (hunger + happiness) / 2;
      setHealth(stayInRange(newHealth));
    }
    // Include gameEnd in dependency array if health should freeze when game ends
  }, [hunger, happiness, gameEnd]); 


  // Effect for game over condition
  useEffect(() => {
    if (health <= 0 ) {   
      // setDialogOpen(true); // Prevent dialog from opening
      setGameEnd(true);
    }
  }, [health]);

  // Copyright component
  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Opensource Project by Virtual Pet '}
        <Link color="inherit" href="http://vp2b.com/" target="_blank" rel="noopener noreferrer">
          VP2B.com
        </Link>
        {/* {'Copyright '} 
        <Link color="inherit" href="#"> // Link removed or updated if needed
          Tamagotchi Inspired Virtual Pet Game
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'} */}
      </Typography>
    );
  }

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Main container with size constraints - Transparent background */}
      <Paper 
        elevation={0} // Remove shadow
        sx={{ 
          padding: 1.5, 
          margin: '2rem auto', 
          maxWidth: 400, 
          minWidth: 350, 
          backgroundColor: 'transparent' // Make background transparent
        }}
      > 
        {/* Attach ref here */}
        <Grid 
          ref={gameGridRef} 
          container 
          direction="column" 
          justifyContent="center" 
          alignItems="center" 
          spacing={1} // Reduced spacing
          // Apply style to hide when not visible (optional, could render conditionally)
          sx={{ 
            opacity: isGameVisible ? 1 : 0,
            visibility: isGameVisible ? 'visible' : 'hidden',
            transition: 'opacity 0.3s ease, visibility 0.3s ease' 
          }} 
        >
          {/* Character Display (Takes most space) */}
          <Grid item sx={{ width: '80%', mb: 1 }}> {/* Adjusted width and margin */}
            {/* Pass petImage and scrollY props down */}
            <Character name={name} happiness={happiness} age={age} health={health} petImage={petImage} actionImage={actionImage} scrollY={scrollY} isSick={isSick} />
          </Grid>

          {/* Name and Age - Format age display */}
          <Grid item container direction="row" justifyContent="space-between" alignItems="baseline" sx={{ width: '100%' }}>
            <Typography variant="h5" component="h2">{name}</Typography> 
            <Typography variant="body1" component="p">Age: {age.toFixed(1)} years</Typography> 
          </Grid>

          {/* Stats Section - No Emojis */}
          {/* Health Bar - REMOVED onClick and cursor pointer, Added Red color */}
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', mt: 1 /*, cursor: 'pointer'*/ }} /*onClick={() => handleBarClick('health')}*/ >
            <LinearProgress color="error" variant="determinate" value={health} sx={{ width: '100%', height: 10, borderRadius: 5 }} />
          </Box>
          {/* Hunger Bar - Default Blue color */}
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', mt: 0.5, cursor: 'pointer' }} onClick={() => handleBarClick('hunger')}>
            <LinearProgress color="primary" variant="determinate" value={hunger} sx={{ width: '100%', height: 10, borderRadius: 5 }} />
          </Box>
          {/* Happiness Bar - Added Green color */}
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', mt: 0.5, mb: 1.5, cursor: 'pointer' }} onClick={() => handleBarClick('happiness')}>
            <LinearProgress color="success" variant="determinate" value={happiness} sx={{ width: '100%', height: 10, borderRadius: 5 }} />
          </Box>

          {/* Emoji Actions Section - Refined Styles */}
          <Box sx={{ 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 1, // Reduced gap slightly to accommodate padding/margins
            mt: 1.5, 
            flexWrap: 'wrap' 
          }}>
            {/* Common styles for emoji 'buttons' */}
            {(() => {
              const emojiButtonStyle = {
                display: 'flex',        // Use flex to center content
                alignItems: 'center',   // Vertically center
                justifyContent: 'center',// Horizontally center
                width: '48px',          // Fixed width
                height: '48px',         // Fixed height
                cursor: 'pointer', 
                fontSize: '1.8rem', 
                borderRadius: '8px',    // Slightly rounder corners
                transition: 'transform 0.1s ease-in-out, background-color 0.1s ease-in-out', // Smooth transitions
                '&:hover': { 
                  transform: 'scale(1.15)', // Slightly smaller hover scale
                  backgroundColor: 'rgba(255, 255, 255, 0.08)' // Subtle hover background
                }, 
                '&:active': { // Active state for click feedback
                  transform: 'scale(1.05)', 
                  backgroundColor: 'rgba(255, 255, 255, 0.15)' // More noticeable click background
                }
              };

              return (
                <>
                  {/* Feed Emoji */}
                  <Box sx={emojiButtonStyle} onClick={feedPet} aria-label="Feed Pet">
                    <Typography component="span" role="img" sx={{ lineHeight: 1 }}>🌾🍗</Typography> {/* Changed Apple to Grain */} 
                  </Box>
                  {/* Play Emoji */}
                  <Box sx={emojiButtonStyle} onClick={playPet} aria-label="Play with Pet">
                    <Typography component="span" role="img" sx={{ lineHeight: 1 }}>🎾</Typography> {/* Removed Happiness Emoji */} 
                  </Box>
                  {/* Clean Emoji (Always visible, greyed out when disabled) */}
                  <Box 
                    sx={{
                      ...emojiButtonStyle, 
                      opacity: pooCount > 0 ? 1 : 0.4, // Grey out when inactive
                      pointerEvents: pooCount > 0 ? 'auto' : 'none', // Disable clicks when inactive
                      cursor: pooCount > 0 ? 'pointer' : 'default', // Change cursor when inactive
                    }} 
                    onClick={pooCount > 0 ? cleanPoo : null} 
                    aria-label={pooCount > 0 ? "Clean Poo" : "Nothing to clean"}
                  >
                    <Typography component="span" role="img" sx={{ lineHeight: 1 }}>
                      💩 <Typography variant="caption" sx={{ verticalAlign: 'super', fontSize: '0.8rem', lineHeight: 1 }}>{pooCount}</Typography>
                    </Typography>
                  </Box>
                </>
              );
            })()}
          </Box>

          {/* Control Emojis (Reset & Speed) */}
          <Box sx={{ 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 2, // Adjusted gap
            mt: 1 
          }}>
            {/* Common styles for control emojis */}
            {(() => {
              const controlEmojiStyle = {
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '40px', height: '40px', // Slightly smaller controls
                  cursor: 'pointer', 
                  fontSize: '1.5rem', 
                  borderRadius: '8px',
                  transition: 'transform 0.1s ease-in-out, background-color 0.1s ease-in-out',
                  '&:hover': { transform: 'scale(1.15)', backgroundColor: 'rgba(255, 255, 255, 0.08)' }, 
                  '&:active': { transform: 'scale(1.05)', backgroundColor: 'rgba(255, 255, 255, 0.15)' }
              };
              return (
                <>
                  {/* Reset Emoji */}
                  <Box sx={controlEmojiStyle} onClick={resetGame} aria-label="Reset Game">
                    <Typography component="span" role="img" sx={{ lineHeight: 1 }}>🔄</Typography>
                  </Box>
                  {/* Speed Emoji */}
                  <Box sx={controlEmojiStyle} onClick={toggleTimeScale} aria-label={`Toggle time speed, current speed ${timeScale}x`}>
                    <Typography component="span" role="button" sx={{ lineHeight: 1, display: 'flex', alignItems: 'baseline' }}>
                      ⏩ <Typography variant="caption" sx={{ fontSize: '0.7rem', ml: 0.5 }}>{timeScale}x</Typography>
                    </Typography>
                  </Box>
                </>
              );
            })()}
          </Box>

          {/* Copyright */}
          <Grid item sx={{ width: '100%', mt: 2 }}>
            <Copyright />
          </Grid>
        </Grid>
      </Paper>

      {/* Conditionally render the overlay - Pass age prop */}
      {!isGameVisible && <StatsOverlay health={health} hunger={hunger} happiness={happiness} age={age} />}

      {/* Dialog for game end remains the same */}
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Game Over.</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Great job! Let's play again!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
          <Button onClick={resetGame} color="primary" autoFocus>
            Start Over!
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
