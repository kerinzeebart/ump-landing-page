import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import '../App.css';

function Features() {
  // Create refs for the chicken and egg elements
  const chickenRef = useRef(null);
  const eggRef = useRef(null);
  const crackingEggRef = useRef(null);
  let memoriesRef = useRef(null);
  // Create refs to store event handler functions
  const onScrollRef = useRef(null);
  const handleResizeRef = useRef(null);
  const setupMouseFollowingRef = useRef(null);
  
  // State to track egg cracking sequence
  const [eggState, setEggState] = useState('🥚');
  const [showCracking, setShowCracking] = useState(false);
  const [chickenHatched, setChickenHatched] = useState(false);
  const [mouseFollowing, setMouseFollowing] = useState(false);
  const [chickenClicked, setChickenClicked] = useState(false);
  
  useEffect(() => {
    // Use the imported anime directly
    const chickenEl = chickenRef.current;
    const eggEl = eggRef.current;
    let startX, endX;
    let chickenAnim, eggAnim;

    function calcDistances() {
      const cw = chickenEl.offsetWidth;
      startX = -cw;
      endX = eggEl.getBoundingClientRect().left - cw * 0.2;
    }

    function buildAnims() {
      // Create egg rolling animation
      chickenAnim = anime({
        targets: chickenEl,
        translateX: [startX, endX],
        // Make the egg roll by increasing rotation
        rotate: [0, 1080], // More rotation to simulate rolling
        duration: 1000,
        easing: 'easeInOutQuad', // Smoother rolling effect
        autoplay: false
      });

      // Create chicken hatching animation
      eggAnim = anime({
        targets: eggEl,
        opacity: [0, 1],
        scale: [0.5, 1], // Start smaller and grow
        duration: 500,
        easing: 'easeOutElastic(1, .5)', // Bouncy effect for hatching
        autoplay: false
      });
    }

    // Define the cracking egg sequence
    function startCrackingSequence() {
      if (showCracking) return; // Don't restart if already running
      
      setShowCracking(true);
      
      // Create a timeline for the egg cracking sequence
      const crackingSequence = [
        { state: '🥚', delay: 0 },
        { state: '🥚\u200D\u2728', delay: 150 }, // Egg with sparkle
        { state: '🐣', delay: 150 },  // Hatching chick
        { state: '🐥', delay: 150 },  // Baby chick
        { state: '', delay: 100 }     // Empty (chicken appears)
      ];
      
      // Play the sequence
      let currentIndex = 0;
      const sequenceInterval = setInterval(() => {
        if (currentIndex < crackingSequence.length) {
          setEggState(crackingSequence[currentIndex].state);
          currentIndex++;
        } else {
          clearInterval(sequenceInterval);
          setChickenHatched(true);
          
          // Make the chicken clickable but don't start following automatically
          setTimeout(() => {
            setChickenHatched(true);
            // setupMouseFollowing is called when chickenClicked is set to true
          }, 500);
        }
      }, 150);
    }
    
    // Setup mouse following behavior for the hatched chicken - store in ref for access outside useEffect
    setupMouseFollowingRef.current = function() {
      const chickenEl = eggRef.current;
      if (!chickenEl) return;
      
      // Get the container bounds
      const featuresSection = document.getElementById('features');
      let bounds = featuresSection ? featuresSection.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight, left: 0, top: 0 };
      
      // Function to refresh bounds when needed
      const refreshBounds = () => {
        if (featuresSection) {
          bounds = featuresSection.getBoundingClientRect();
        }
      };
      
      // We need to define the click handler outside but use it later
      const onChickenClick = (e) => {
        e.stopPropagation(); // Prevent event from bubbling
        console.log('Chicken clicked!'); // Debug log
        setChickenClicked(true);
        setMouseFollowing(true);
        
        // Play a little jump animation when clicked
        anime({
          targets: chickenEl,
          translateY: [0, -20, 0],
          duration: 500,
          easing: 'easeOutElastic(1.5, 0.5)'
        });
      };
      
      // Wait for the chicken to be visible before adding the click event
      if (chickenHatched && !chickenClicked) {
        // Remove any existing listener to avoid duplicates
        chickenEl.removeEventListener('click', onChickenClick);
        // Add new click listener
        chickenEl.addEventListener('click', onChickenClick);
        console.log('Added click listener to chicken');
      }
      
      // Handle mouse movement
      const onMouseMove = (e) => {
        if (!mouseFollowing || !chickenHatched || !chickenClicked) return;
        
        refreshBounds();
        
        // Calculate offset from chicken's starting position
        const startX = bounds.right - 100; // Starting X position
        const startY = bounds.bottom - 80; // Starting Y position
        
        // Limit movement range
        const maxDistanceX = 150;
        const maxDistanceY = 100;
        
        // Calculate movement based on mouse position relative to starting position
        const moveX = Math.min(Math.max(e.clientX - startX, -maxDistanceX), maxDistanceX);
        const moveY = Math.min(Math.max(e.clientY - startY, -maxDistanceY), maxDistanceY);
        
        // Apply movement with standard anime.js animation
        anime({
          targets: chickenEl,
          translateX: moveX,
          translateY: moveY,
          duration: 300,
          easing: 'easeOutElastic(1.5, 0.5)', // Bouncy effect
        });
      };
      
      // Add mouse move listener
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', refreshBounds);
      
      // Store cleanup function in ref
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', refreshBounds);
        chickenEl.removeEventListener('click', onChickenClick);
      };
    }

    // Define the scroll handler and store it in the ref
    onScrollRef.current = function onScroll() {
      if (!chickenAnim || !eggAnim) return;
      
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const rawProg = maxScroll ? window.scrollY / maxScroll : 0;
      const walkProg = Math.min(rawProg / 0.97, 1);

      // Update chicken animation progress
      chickenAnim.seek(walkProg * chickenAnim.duration);

      // Handle egg animation
      if (rawProg > 0.97) {
        if (!showCracking) {
          startCrackingSequence();
          setTimeout(() => {
            eggAnim.play();
            eggAnim.seek(eggAnim.duration);
          }, 750); // Delay chicken appearance until after egg cracks
        }
      } else {
        // Reset all states when scrolling back up
        setShowCracking(false);
        setChickenHatched(false);
        setMouseFollowing(false);
        setChickenClicked(false);
        setEggState('🥚');
        if (eggAnim) {
          eggAnim.seek(0);
        }
        
        // Reset any transforms on the chicken element
        if (eggRef.current) {
          eggRef.current.style.transform = '';
        }
      }
    };

    // Define the resize handler and store it in the ref
    handleResizeRef.current = function handleResize() {
      calcDistances();
      buildAnims();
      if (onScrollRef.current) onScrollRef.current();
    };

    function init() {
      calcDistances();
      buildAnims();
      if (onScrollRef.current) onScrollRef.current();
    }

    init();
    
    // Add event listeners using the refs
    window.addEventListener('scroll', onScrollRef.current, { passive: true });
    window.addEventListener('resize', handleResizeRef.current, { passive: true });
    
    // Return cleanup function
    return () => {
      // Remove event listeners using the refs
      if (onScrollRef.current) {
        window.removeEventListener('scroll', onScrollRef.current, { passive: true });
      }
      if (handleResizeRef.current) {
        window.removeEventListener('resize', handleResizeRef.current, { passive: true });
      }
      
      // Also clean up mouse following if active
      if (mouseFollowing) {
        // These will be cleaned up by the setupMouseFollowing return function
        // if it was called, but we keep this as a safety measure
      }
    };
  }, []);
  // SVG icons for features
  const stealthIcon = (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 12C20 12 16.4183 16 12 16C7.58172 16 4 12 4 12C4 12 7.58172 8 12 8C16.4183 8 20 12 20 12Z" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const sanctuaryIcon = (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22V12H15V22" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const abilitiesIcon = (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.59 13.51L15.42 17.49" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.41 6.51L8.59 10.49" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const communityIcon = (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  const proceduralIcon = (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.27002 6.96002L12 12.01L20.73 6.96002" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22.08V12" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <>
      {/* Chicken and Egg Animation */}
      <div id="scene" style={{ 
        position: 'fixed', 
        left: 0, 
        bottom: '15vh', 
        width: '100vw', 
        overflow: 'visible', 
        pointerEvents: 'none',
        zIndex: 100
      }}>
        <div id="egg" ref={chickenRef} style={{ 
          position: 'absolute', 
          bottom: 0, 
          willChange: 'transform, opacity',
          fontSize: '60px' // Make egg larger
        }}>🥚</div>
        <div id="cracking-egg" ref={crackingEggRef} style={{ 
          position: 'absolute', 
          bottom: 0, 
          right: '10vw', 
          opacity: showCracking ? 1 : 0,
          willChange: 'transform, opacity',
          fontSize: '60px', // Make egg larger
          transition: 'opacity 0.1s ease'
        }}>{eggState}</div>
        <div 
          id="chicken" 
          ref={eggRef} 
          onClick={(e) => {
            if (chickenHatched && !chickenClicked) {
              console.log('React click handler triggered');
              setChickenClicked(true);
              setMouseFollowing(true);
              if (setupMouseFollowingRef.current) {
                setupMouseFollowingRef.current();
              }
              
              // Play a jump animation
              anime({
                targets: e.target,
                translateY: [0, -20, 0],
                duration: 500,
                easing: 'easeOutElastic(1.5, 0.5)'
              });
            }
          }}
          style={{ 
            position: 'absolute', 
            bottom: 0, 
            right: '10vw',
            opacity: chickenHatched ? 1 : 0, 
            willChange: 'transform, opacity',
            fontSize: '60px', // Make chicken larger
            transition: 'opacity 0.3s ease',
            zIndex: 120, // Ensure chicken is above other elements
            cursor: chickenHatched && !chickenClicked ? 'pointer' : 'default', // Show pointer cursor when clickable
            animation: chickenHatched && !chickenClicked ? 'chickenBounce 2s infinite ease-in-out' : 'none'
          }}
        >🐔</div>
      </div>
      {/* UE5 Engine Game Animation Sample Pack Video */}
      <style>
        {`
          @keyframes chickenBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
      <section style={{ 
        backgroundColor: 'var(--dark-bg)', 
        textAlign: 'center', 
        paddingTop: '50px',
        paddingBottom: '50px',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container">
          <h2 style={{ 
            color: 'var(--primary-color)', 
            marginBottom: '20px',
            fontSize: '2.5rem',
            fontWeight: 'bold'
          }}>UE5 Engine Game Animation Sample Pack</h2>
          <p style={{ 
            maxWidth: '700px', 
            margin: '0 auto 30px', 
            fontSize: '1.2rem', 
            color: 'var(--secondary-color)' 
          }}>Check out our latest gameplay animations powered by Unreal Engine 5</p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <iframe 
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7266837041357733888?compact=1" 
              height="399" 
              width="100%" 
              frameBorder="0" 
              allowFullScreen="" 
              title="UE5 Engine Game Animation Sample Pack"
              style={{
                borderRadius: '8px',
                backgroundColor: '#000'
              }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Game Features Section */}
      <section id="features" style={{ 
        backgroundColor: 'var(--dark-bg)', 
        textAlign: 'center', 
        paddingTop: '100px'
      }}
      data-component-name="Features"
      >
        <div className="container" data-component-name="Features">
          <h2>Game Features</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 60px', fontSize: '1.2rem', color: 'var(--secondary-color)' }}
            data-component-name="Features"
          >
            Experience the perfect blend of stealth action and cozy gameplay in Ultra Mega Chicken Patrol
          </p>
        
        <div 
          style={{ position: 'relative', maxWidth: '800px', margin: '0 auto 40px' }} 
          className="feathered-memories-container"
          ref={memoriesRef = useRef(null)}
        >
          <div 
            ref={el => {
              if (el && !el.animationInitialized) {
                const handleScroll = () => {
                  if (!memoriesRef.current) return;
                  
                  const rect = memoriesRef.current.getBoundingClientRect();
                  const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
                  
                  if (isVisible && !el.animationsTriggered) {
                    // Text animation for the title
                    anime({
                      targets: '.feathered-memories-title',
                      opacity: [0, 1],
                      translateY: [20, 0],
                      easing: 'easeOutExpo',
                      duration: 1200
                    });
                    
                    // Animations for each feature item
                    anime({
                      targets: '.feature-item',
                      opacity: [0, 1],
                      translateX: [40, 0],
                      easing: 'easeOutElastic(1.2, 0.5)',
                      duration: 1200,
                      delay: (el, i) => 400 + (i * 300),
                    });
                    
                    // Number counting animation
                    anime({
                      targets: '.feature-number',
                      scale: [0, 1],
                      rotate: [-10, 0],
                      easing: 'easeOutBack',
                      duration: 800,
                      delay: (el, i) => 300 + (i * 300)
                    });
                    
                    el.animationsTriggered = true;
                  }
                };
                
                // Initial setup
                handleScroll();
                
                // Add scroll listener
                window.addEventListener('scroll', handleScroll);
                
                // Cleanup function
                el.cleanup = () => {
                  window.removeEventListener('scroll', handleScroll);
                };
                
                el.animationInitialized = true;
              }
            }}
            style={{ 
              width: '100%',
              borderRadius: '16px',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5)',
              border: '2px solid rgba(230, 57, 70, 0.3)',
              background: 'var(--dark-secondary)',
              padding: '30px',
              color: 'var(--light-text)',
              position: 'relative',
              opacity: 0, // Start hidden, will be animated in
              transform: 'translateY(30px)' // Start lower, will be animated up
            }} 
            className="memories-content"
          >
            <h2 className="feathered-memories-title" style={{
              textAlign: 'center',
              marginBottom: '30px',
              color: 'var(--primary-color)',
              fontWeight: 'bold',
              fontSize: '32px',
              textShadow: '0 2px 8px rgba(230, 57, 70, 0.3)',
              fontFamily: '"Nunito", sans-serif',
              opacity: 0, // Start hidden
              position: 'relative',
              paddingBottom: '15px'
            }}>
              FEATHERED MEMORIES
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                backgroundColor: 'var(--primary-color)',
                borderRadius: '2px'
              }} />
            </h2>
            
            <div className="feature-list" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginLeft: '20px' }}>
                <div className="feature-number" style={{
                  background: 'var(--primary-color)',
                  color: 'white',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(230, 57, 70, 0.4)',
                  opacity: 0 // Start hidden
                }}>1</div>
                <div>
                  <h3 style={{ margin: '0 0 5px 0', fontWeight: 'bold', fontSize: '22px', color: 'var(--primary-color)' }}>Remembered Interaction</h3>
                  <p style={{ margin: 0, fontSize: '18px', lineHeight: '1.5', color: 'var(--light-text)' }}>Chickens recall your actions and play style</p>
                </div>
              </div>
              
              <div className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', opacity: 0, marginLeft: '20px' }}>
                <div className="feature-number" style={{
                  background: 'var(--primary-color)',
                  color: 'white',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(230, 57, 70, 0.4)'
                }}>2</div>
                <div>
                  <h3 style={{ margin: '0 0 5px 0', fontWeight: 'bold', fontSize: '22px', color: 'var(--primary-color)' }}>Developed Relationships</h3>
                  <p style={{ margin: 0, fontSize: '18px', lineHeight: '1.5', color: 'var(--light-text)' }}>Form bonds with your flock</p>
                </div>
              </div>
              
              <div className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', opacity: 0, marginLeft: '20px' }}>
                <div className="feature-number" style={{
                  background: 'var(--primary-color)',
                  color: 'white',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(230, 57, 70, 0.4)'
                }}>3</div>
                <div>
                  <h3 style={{ margin: '0 0 5px 0', fontWeight: 'bold', fontSize: '22px', color: 'var(--primary-color)' }}>Unique Playful Atmosphere</h3>
                  <p style={{ margin: 0, fontSize: '18px', lineHeight: '1.5', color: 'var(--light-text)' }}>Contribute to the sanctuary's look & feel</p>
                </div>
              </div>
            </div>
            
            {/* Removed the UMCP 2025 button */}
          </div>
          
          {/* Add scroll-triggered animation for the entire container */}
          <style>{`
            .memories-content {
              transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            }
            
            .memories-content.visible {
              opacity: 1 !important;
              transform: translateY(0) !important;
            }
            
            .feature-item {
              transition: transform 0.3s ease, opacity 0.5s ease;
            }
            
            .feature-item:hover {
              transform: translateX(10px);
            }
            
            .feature-number {
              transition: transform 0.3s ease;
            }
            
            .feature-item:hover .feature-number {
              transform: rotate(10deg) scale(1.1);
            }
          `}</style>
        </div>
        
        {useEffect(() => {
          const handleScroll = () => {
            const memorySection = document.querySelector('.memories-content');
            if (!memorySection || !memoriesRef.current) return;
            
            const rect = memoriesRef.current.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
            
            if (isInView) {
              memorySection.classList.add('visible');
            } else {
              memorySection.classList.remove('visible');
            }
          };
          
          // Run once on mount
          handleScroll();
          
          // Add scroll listener
          window.addEventListener('scroll', handleScroll);
          
          // Cleanup
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, [])}
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', margin: '0 auto' }}>
          <div className="feature-card" style={{ 
            backgroundColor: 'var(--dark-secondary)', 
            padding: '30px', 
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}>
            <div style={{ marginBottom: '20px' }}>{stealthIcon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--primary-color)' }}>Stealth Missions</h3>
            <p style={{ color: 'var(--light-text)' }}>Navigate through challenging missions with stealth and strategy. Sneak past guards, disable traps, and rescue captured eggs without being detected.</p>
            <div style={{ marginTop: '20px', textAlign: 'left' }}>
              <ul style={{ paddingLeft: '20px', textAlign: 'left', color: 'var(--light-text)' }}>
                <li style={{ marginBottom: '8px' }}>Multiple approach options</li>
                <li style={{ marginBottom: '8px' }}>Diversion tactics</li>
                <li>Stealth gear upgrades</li>
              </ul>
            </div>
          </div>
          
          <div className="feature-card" style={{ 
            backgroundColor: 'var(--dark-secondary)', 
            padding: '30px', 
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}>
            <div style={{ marginBottom: '20px' }}>{sanctuaryIcon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--primary-color)' }}>Sanctuary Building</h3>
            <p style={{ color: 'var(--light-text)' }}>Build and customize your chicken sanctuary. Create safe spaces for rescued eggs to hatch and grow, and watch your community of chickens flourish.</p>
            <div style={{ marginTop: '20px', textAlign: 'left' }}>
              <ul style={{ paddingLeft: '20px', textAlign: 'left', color: 'var(--light-text)' }}>
                <li style={{ marginBottom: '8px' }}>Expandable sanctuary</li>
                <li style={{ marginBottom: '8px' }}>Decorative elements</li>
                <li>Functional buildings</li>
              </ul>
            </div>
          </div>
          
          <div className="feature-card" style={{ 
            backgroundColor: 'var(--dark-secondary)', 
            padding: '30px', 
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}>
            <div style={{ marginBottom: '20px' }}>{abilitiesIcon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--primary-color)' }}>Chicken Abilities</h3>
            <p style={{ color: 'var(--light-text)' }}>Unlock and upgrade special chicken abilities. Each chicken has unique skills that can help in missions, from enhanced vision to special movement techniques.</p>
            <div style={{ marginTop: '20px', textAlign: 'left' }}>
              <ul style={{ paddingLeft: '20px', textAlign: 'left', color: 'var(--light-text)' }}>
                <li style={{ marginBottom: '8px' }}>Skill trees</li>
                <li style={{ marginBottom: '8px' }}>Ability combinations</li>
                <li>Special power-ups</li>
              </ul>
            </div>
          </div>
          
          <div className="feature-card" style={{ 
            backgroundColor: 'var(--dark-secondary)', 
            padding: '30px', 
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}>
            <div style={{ marginBottom: '20px' }}>{communityIcon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--primary-color)' }}>Chicken Community</h3>
            <p style={{ color: 'var(--light-text)' }}>Develop relationships with other chickens and animals in your sanctuary. Form a community with distinct personalities and stories that evolve over time.</p>
            <div style={{ marginTop: '20px', textAlign: 'left' }}>
              <ul style={{ paddingLeft: '20px', textAlign: 'left', color: 'var(--light-text)' }}>
                <li style={{ marginBottom: '8px' }}>Character development</li>
                <li style={{ marginBottom: '8px' }}>Friendship mechanics</li>
                <li>Community events</li>
              </ul>
            </div>
          </div>
          
          <div className="feature-card" style={{ 
            backgroundColor: 'var(--dark-secondary)', 
            padding: '30px', 
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}>
            <div style={{ marginBottom: '20px' }}>{proceduralIcon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--primary-color)' }}>Procedural Worlds</h3>
            <p style={{ color: 'var(--light-text)' }}>Experience endless variety with our advanced procedural generation system using Wave Function Collapse and UE5's PCG toolkit to create unique environments every time you play.</p>
            <div style={{ marginTop: '20px', textAlign: 'left' }}>
              <ul style={{ paddingLeft: '20px', textAlign: 'left', color: 'var(--light-text)' }}>
                <li style={{ marginBottom: '8px' }}>Wave Function Collapse algorithm</li>
                <li style={{ marginBottom: '8px' }}>UE5 PCG integration</li>
                <li>Adaptive difficulty scaling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Features;
