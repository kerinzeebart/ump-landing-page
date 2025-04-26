import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import styles from './ChickenPlatformer.module.css'; // Import CSS Module

// --- Constants ---
const GAME_HEIGHT = 150; // pixels
const GAME_WIDTH = 600; // pixels
const CHICKEN_SIZE = 35; // pixels (Used for collision, visual size from emoji)
const CHICKEN_X_POSITION = 50; // pixels from left
const CHICKEN_JUMP_HEIGHT = 110; // pixels (Further increased jump height)
const GRAVITY_AMOUNT = 3.2; // Pixels per game tick (Slightly decreased for more hang time)
const GROUND_LEVEL = GAME_HEIGHT - CHICKEN_SIZE;

// Obstacle constants (Simplified for one obstacle)
const OBSTACLE_WIDTH = 20; 
const OBSTACLE_HEIGHT = 40; // Adjust if egg image aspect ratio is different
const OBSTACLE_SPEED = 4;
const OBSTACLE_IMG_NORMAL = '/images/obstaclesimages/frame0_nocracked_optimized.png';
const OBSTACLE_IMG_HIT = '/images/obstaclesimages/frame1_crackedHit_optimized.png';

const WALK_CYCLE_FRAMES = [
  '/images/gameimages/frame1_optimized.png',
  '/images/gameimages/frame2_optimized.png',
  '/images/gameimages/frame3_optimized.png',
];
const FRAME_UPDATE_RATE = 5; // Update frame every 5 game ticks

const GAME_TICK_RATE = 50; // milliseconds (~20 FPS)

const GAME_OVER_TEXT_COLOR = 'red';

function ChickenPlatformer() {
  const [chickenY, setChickenY] = useState(0); // Y position relative to game bottom (0 = ground)
  const [chickenX] = useState(CHICKEN_X_POSITION); // Chicken X is fixed
  const [obstacleX, setObstacleX] = useState(GAME_WIDTH); // Position of the single obstacle
  const [isJumping, setIsJumping] = useState(false);
  const [score, setScore] = useState(0);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [gameTickCounter, setGameTickCounter] = useState(0);
  const [obstacleHit, setObstacleHit] = useState(false); // Track if obstacle was hit
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(0); // Placeholder for HI score
  const [showCollisionEffect, setShowCollisionEffect] = useState(false);

  // Animation controls (Only for game area effects now)
  const gameAreaControls = useAnimation();

  // --- Jump Logic (Simplified Dino Style) --- 
  const handleJump = useCallback(() => {
    // Can only jump if not already jumping, and not game over
    if (!isJumping && !gameOver) { 
      setIsJumping(true);
      setChickenY(prevY => prevY - CHICKEN_JUMP_HEIGHT); // Apply jump impulse by changing state
    }
  }, [isJumping, gameOver]); // Removed ducking dependency

  // --- Restart Game Function (Dino Style) --- 
  const restartGame = () => {
    setChickenY(0); 
    // chickenX is constant
    setObstacleX(GAME_WIDTH); // Reset obstacle position
    setIsJumping(false);
    setScore(0);
    setGameOver(false);
    setShowCollisionEffect(false);
    setObstacleHit(false); // Reset hit state
    gameAreaControls.start({ borderColor: 'var(--primary-color)'});
  };

  // --- Game Loop (Score, Collision, Gravity) (Dino Style) --- 
  useEffect(() => {
    if (gameOver) {
      // Stop the loop if game is over
      return; 
    }
 
    let animationFrameId; // Store the animation frame ID

    // Define the game loop function
    const gameLoop = (timestamp) => { // timestamp can be used for delta time if needed
      // --- Update Animation Frame --- 
      setGameTickCounter(prev => {
        const nextCount = prev + 1;
        if (nextCount >= FRAME_UPDATE_RATE) {
          // Only update frame if chicken is on the ground (looks weird mid-air)
          if (!isJumping) { 
            setCurrentFrameIndex(prevIndex => (prevIndex + 1) % WALK_CYCLE_FRAMES.length);
          }
          return 0; // Reset counter
        } 
        return nextCount;
      });

      // --- Update Score ---
      setScore(prevScore => prevScore + 1);
        
      // --- Apply Gravity ---
      let nextY = chickenY + GRAVITY_AMOUNT;
  
      // --- Ground Collision ---
      if (nextY >= 0) { // If chicken hits or goes below ground (0)
        nextY = 0; // Set Y to 0 (ground level)
        // Check if we were jumping and just landed
        if (isJumping) {
          setIsJumping(false);
        }
      }
      setChickenY(nextY);

      // --- Move Obstacle --- 
      let newObstacleX = obstacleX - OBSTACLE_SPEED;
      // Check if obstacle is off-screen left, reset to right
      if (newObstacleX < -OBSTACLE_WIDTH) { // Check if fully off-screen
        const randomOffset = Math.random() * 150; // Random value between 0 and 150
        newObstacleX = GAME_WIDTH + randomOffset; // Reset to right edge + random offset
      }
      setObstacleX(newObstacleX);

      // --- Check Collision --- 
      const chickenTop = GAME_HEIGHT - CHICKEN_SIZE + chickenY; // Y from top of screen
      const chickenBottom = chickenTop + CHICKEN_SIZE;
      const chickenLeft = chickenX;
      const chickenRight = chickenX + CHICKEN_SIZE; 

      const obstacleTop = GAME_HEIGHT - OBSTACLE_HEIGHT;
      const obstacleBottom = GAME_HEIGHT;
      const obstacleLeft = newObstacleX; // Use the calculated next position for check
      const obstacleRight = newObstacleX + OBSTACLE_WIDTH;

      // Simple AABB collision check
      const horizontalOverlap = chickenLeft < obstacleRight && chickenRight > obstacleLeft;
      const verticalOverlap = chickenTop < obstacleBottom && chickenBottom > obstacleTop;

      if (horizontalOverlap && verticalOverlap) {
         // Collision detected!
         setGameOver(true);
         setShowCollisionEffect(true);
         setObstacleHit(true); // Mark obstacle as hit

         // Update High Score if current score is higher
         if (score > highScore) {
            setHighScore(score); // Update high score on game over
         }
      }

      // Continue the loop
      if (!gameOver) { // Check gameOver state directly inside the loop
         animationFrameId = requestAnimationFrame(gameLoop);
      }
    }; // End of gameLoop function definition
 
    // Start the game loop
    animationFrameId = requestAnimationFrame(gameLoop);

    // Cleanup function to cancel the animation frame when component unmounts or game ends
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
    // Dependencies updated for obstacle logic
  }, [gameOver, chickenY, isJumping, obstacleX, score, highScore]); 
    
  // Effect to animate collision feedback (No change needed here)
  useEffect(() => {
    if (showCollisionEffect) {
      // Flash game area border
      gameAreaControls.start({
        borderColor: ['var(--primary-color)', 'red', 'var(--primary-color)'],
        transition: { duration: 0.4, times: [0, 0.5, 1] }
      });
      
      // We can add a chicken shake effect here if needed, 
      // but it would require re-adding chickenControls or handling it differently
      // For now, just flash the border
      setShowCollisionEffect(false); // Reset effect trigger
    }
  }, [showCollisionEffect, gameAreaControls]);

  // --- Keyboard Controls --- 
  useEffect(() => {
    const handleKeyDown = (event) => { 
      if (gameOver) return;

      switch (event.key) {
        case ' ':
        case 'ArrowUp':
          handleJump();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // Dependencies updated
  }, [gameOver, handleJump, isJumping]); 
  
  // --- Render --- 
  const gameAreaStyle = {
    // ... (rest of the code remains the same)
  };

  return (
    <section id="chicken-platformer" className={styles.section} data-component-name="ChickenPlatformer">
      <div className={styles.container}>
        <h2 className={styles.heading}>Simple Chicken Runner</h2>
        <p className={styles.paragraph}>
          Engage in a lighthearted mini-game! Guide your chicken across the screen, tapping spacebar or clicking the game area to jump over oncoming obstacles.
        </p>

        {/* Game Area (Reverted rendering logic) */} 
        <motion.div
          className={styles.gameArea}
          onClick={handleJump}
          style={{ 
            '--game-height': `${GAME_HEIGHT}px`, 
            '--game-width': `${GAME_WIDTH}px`,
            '--game-area-bg-color': '#e0f7fa'
          }} 
          animate={gameAreaControls}
        >
          {/* Background Layers */} 
          <div className={styles.bgLayerFar}></div>
          <div className={styles.bgLayerNear}></div>

          {/* Chicken rendering (positioning controlled by state via animate) */}
          <motion.div
            className={styles.chicken}
            animate={{ y: chickenY }} // Y is relative to ground (0 = ground, negative = up)
            transition={{ type: 'spring', stiffness: 600, damping: 30 }} // Add transition for smooth movement
            initial={{ y: 0 }} 
            whileHover={{ scale: 1.05 }}
            style={{ 
              // transform removed, assuming images face right
            }}
          > 
            <img 
              src={WALK_CYCLE_FRAMES[currentFrameIndex]}
              alt="Chicken"
              style={{ display: 'block', width: '100%', height: '100%' }} // Make image fill the div
            />
          </motion.div>

          {/* Single Obstacle rendering */} 
          <motion.div
            className={styles.obstacle} // Keep class for positioning/base styles
            style={{
              position: 'absolute',
              bottom: 0,
              width: `${OBSTACLE_WIDTH}px`, 
              height: `${OBSTACLE_HEIGHT}px`, 
              transform: `translateX(${obstacleX}px)`
            }}
          >
            <img 
               src={obstacleHit ? OBSTACLE_IMG_HIT : OBSTACLE_IMG_NORMAL}
               alt="Obstacle"
               style={{ 
                  display: 'block', 
                  maxWidth: '100%',  // Allow natural width up to container size
                  maxHeight: '100%', // Allow natural height up to container size
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain', // Maintain aspect ratio within bounds
                  transform: 'scale(1.5) translateY(20%)', // Scale and shift down
                  transformOrigin: 'bottom center' // Scale from the bottom center 
               }}
            />
          </motion.div>

           {/* Score Display */}
           <div className={styles.scoreDisplay}>
             HI {String(highScore).padStart(5, '0')} {String(score).padStart(5, '0')}
           </div>
        </motion.div>

        {/* Restart Button - placed outside gameArea */} 
        {gameOver && (
          <button onClick={restartGame} className={styles.restartButton}>
            Restart Game
          </button>
        )}
      </div>
    </section>
  );
}

export default ChickenPlatformer;
