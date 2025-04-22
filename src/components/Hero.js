import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import '../Modal.css';
import MobileDeviceMockupIPhone from './MobileDeviceMockupIPhone';

function Hero() {
  const chickenRef = useRef(null);
  const eggRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Create refs to store event handler functions
  const onScrollRef = useRef(null);
  const handleResizeRef = useRef(null);
  
  useEffect(() => {
    // Dynamically import anime.js
    import('animejs').then(module => {
      // Get the default export or the module itself
      const anime = module.default || module;
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
        // Create chicken animation
        chickenAnim = anime({
          targets: chickenEl,
          translateX: [startX, endX],
          rotate: [0, 540],
          duration: 1000,
          easing: 'linear',
          autoplay: false
        });

        // Create egg animation
        eggAnim = anime({
          targets: eggEl,
          opacity: [0, 1],
          duration: 350,
          easing: 'easeOutQuad',
          autoplay: false
        });
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
          eggAnim.play();
          eggAnim.seek(eggAnim.duration);
        } else {
          eggAnim.seek(0);
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
    }).catch(error => {
      console.error('Failed to load anime.js:', error);
    });
    
    // Return cleanup function
    return () => {
      // Remove event listeners using the refs
      if (onScrollRef.current) {
        window.removeEventListener('scroll', onScrollRef.current, { passive: true });
      }
      if (handleResizeRef.current) {
        window.removeEventListener('resize', handleResizeRef.current, { passive: true });
      }
    };

  }, []);

  const openTrailerModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeTrailerModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const fadeIn = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  };

  const fadeInDelay1 = {
    ...fadeIn,
    transitionDelay: '0.2s'
  };

  const fadeInDelay2 = {
    ...fadeIn,
    transitionDelay: '0.4s'
  };

  const fadeInDelay3 = {
    ...fadeIn,
    transitionDelay: '0.6s'
  };

  return (
    <>
      <div id="scene" style={{ position: 'fixed', left: 0, bottom: '10vh', width: '100vw', overflow: 'visible', pointerEvents: 'none' }}>
        <div id="chicken" ref={chickenRef} style={{ position: 'absolute', bottom: 0, willChange: 'transform, opacity' }}>🐔</div>
        <div id="egg" ref={eggRef} style={{ position: 'absolute', bottom: 0, right: '10vw', opacity: 0, willChange: 'transform, opacity' }}>🥚</div>
      </div>
      <section style={{
        background: 'linear-gradient(135deg, #121212 0%, #1e1e1e 100%)',
        padding: '160px 20px 100px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Mobile Device Mockup */}
        <MobileDeviceMockupIPhone />
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'rgba(230, 57, 70, 0.15)',
          boxShadow: '0 0 30px rgba(230, 57, 70, 0.2)',
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'rgba(244, 162, 97, 0.15)',
          boxShadow: '0 0 30px rgba(244, 162, 97, 0.2)',
          zIndex: 0
        }}></div>

        <div className="container">
          <h1 style={{ ...fadeIn, fontSize: '3.5rem', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
            <span style={{ color: '#e63946' }}>UMCP:</span><br />
            <span style={{ color: '#f8f9fa' }}>ULTIMATE MASS CHICKEN PLAY</span>
          </h1>

          <p style={{ ...fadeInDelay1, fontSize: '1.4rem', maxWidth: '800px', margin: '0 auto 20px', fontWeight: '300', lineHeight: '1.6', color: '#f4a261' }}>
            A Cozy Chicken Rescue Adventure Inspired by Classic Arcade Mechanics
          </p>

          <h2 style={{ ...fadeInDelay1, fontSize: '1.8rem', maxWidth: '800px', margin: '0 auto 15px', fontWeight: '500', lineHeight: '1.4', color: '#f4a261' }}>
            "Where chickens thrive, and so do you!"
          </h2>

          <div style={{ ...fadeInDelay1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', margin: '0 auto 30px' }}>
            <span style={{ padding: '8px 16px', background: 'rgba(230, 57, 70, 0.2)', borderRadius: '20px', color: '#e63946', fontWeight: 'bold', fontSize: '1rem' }}>PC</span>
            <span style={{ padding: '8px 16px', background: 'rgba(244, 162, 97, 0.2)', borderRadius: '20px', color: '#f4a261', fontWeight: 'bold', fontSize: '1rem' }}>Switch</span>
            <span style={{ padding: '8px 16px', background: 'rgba(82, 183, 136, 0.2)', borderRadius: '20px', color: '#52b788', fontWeight: 'bold', fontSize: '1rem' }}>Mobile</span>
          </div>

          {/* UMCP Explanation Section */}
          <div style={{ ...fadeInDelay2, position: 'relative', margin: '40px auto', maxWidth: '900px', background: 'rgba(30, 30, 30, 0.7)', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}>
            <h2 style={{ fontSize: '2rem', color: '#f8f9fa', marginBottom: '25px', textAlign: 'left' }}>
              <span style={{ color: '#e63946' }}>🤔</span> So... what exactly is this?
            </h2>
            
            <div style={{ textAlign: 'left', color: '#f8f9fa', lineHeight: '1.6' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                Imagine you want to make your own 3‑D game but have zero time (or patience) to wrestle with complicated software. uMCP is our "golden cable" that connects three things:
              </p>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                <span style={{ fontSize: '1.5rem', marginRight: '15px', color: '#e63946' }}>1️⃣</span>
                <p style={{ margin: 0, fontSize: '1.1rem' }}>
                  <strong style={{ color: '#f4a261' }}>Your idea</strong> – you just type what you want on‑screen: "snowy valley," "moving robot," "wooden bridge."
                </p>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                <span style={{ fontSize: '1.5rem', marginRight: '15px', color: '#e63946' }}>2️⃣</span>
                <p style={{ margin: 0, fontSize: '1.1rem' }}>
                  <strong style={{ color: '#f4a261' }}>A digital helper</strong> – a smart program that hunts down or builds those objects for you and hands them to the game engine.
                </p>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
                <span style={{ fontSize: '1.5rem', marginRight: '15px', color: '#e63946' }}>3️⃣</span>
                <p style={{ margin: 0, fontSize: '1.1rem' }}>
                  <strong style={{ color: '#f4a261' }}>A ready‑to‑play scene in Unreal Engine</strong> – the same engine big studios use. Thanks to uMCP everything shows up there automatically.
                </p>
              </div>
              
              <div style={{ height: '2px', background: 'rgba(244, 162, 97, 0.3)', margin: '30px 0' }}></div>
              
              <h3 style={{ fontSize: '1.6rem', color: '#f4a261', marginBottom: '20px', textAlign: 'left' }}>
                <span style={{ marginRight: '10px' }}>🎮</span> Fun instead of loading bars
              </h3>
              
              <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                While the helper "does its magic" in the background (it can take a few minutes), you don't stare at a boring progress bar. You fire up the Chicken Task Force mini‑game:
              </p>
              
              <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 25px 0' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <span style={{ fontSize: '1.2rem', marginRight: '15px', color: '#52b788' }}>🐔</span>
                  <p style={{ margin: 0, fontSize: '1.1rem' }}>
                    <strong style={{ color: '#f4a261' }}>Player 1</strong> base character controls a friendly chicken that parkours to missions, gathers grain, hops over platforms—each grain or egg collected finishes another chunk of the real task.
                  </p>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <span style={{ fontSize: '1.2rem', marginRight: '15px', color: '#52b788' }}>📷</span>
                  <p style={{ margin: 0, fontSize: '1.1rem' }}>
                    <strong style={{ color: '#f4a261' }}>Player 2</strong> base character is a Chicken with a pulley "drone camera", films the chicken's stunts, and can slide bridges or open gates. This player acts as the interactive camera operator of the game filming the Player 1 actions and helping him progress during the missions.
                  </p>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.2rem', marginRight: '15px', color: '#52b788' }}>❤️</span>
                  <p style={{ margin: 0, fontSize: '1.1rem' }}>
                    Put on a heart‑rate band (e.g., Apple Watch). The game notices how fast your heart beats and slows down or speeds up the action so it always feels good.
                  </p>
                </li>
              </ul>
              
              <div style={{ height: '2px', background: 'rgba(244, 162, 97, 0.3)', margin: '30px 0' }}></div>
              
              <h3 style={{ fontSize: '1.6rem', color: '#f4a261', marginBottom: '20px', textAlign: 'left' }}>
                <span style={{ marginRight: '10px' }}>✨</span> Why is this cool?
              </h3>
              
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <span style={{ fontSize: '1.2rem', marginRight: '15px', color: '#e63946' }}>🔄</span>
                  <p style={{ margin: 0, fontSize: '1.1rem' }}>
                    <strong style={{ color: '#f4a261' }}>Two things at once</strong> – the real game is being built in the background while you're playing.
                  </p>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <span style={{ fontSize: '1.2rem', marginRight: '15px', color: '#e63946' }}>🧠</span>
                  <p style={{ margin: 0, fontSize: '1.1rem' }}>
                    <strong style={{ color: '#f4a261' }}>Learn Unreal Engine without manuals</strong> – chickens will explain what is going on, every egg, obstacle, or robot in the mini‑game represents a piece of work the computer is doing in the engine that monitors tasks via the a real MCP server.
                  </p>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.2rem', marginRight: '15px', color: '#e63946' }}>💬</span>
                  <p style={{ margin: 0, fontSize: '1.1rem' }}>
                    <strong style={{ color: '#f4a261' }}>No tech jargon</strong> – you don't have to know what "materials," "scripts," or "imports" are. You type "I want a wooden cabin by the lake" and... voila!
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ ...fadeInDelay2, position: 'relative', margin: '0 auto 50px', maxWidth: '900px' }}>
            <div 
              style={{
                position: 'relative',
                width: '504px',
                height: '399px',
                overflow: 'hidden',
                borderRadius: '16px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)',
                zIndex: 2,
                margin: '0 auto' /* Center the video */
              }}
              data-component-name="Hero"
            >
              <iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7267705319231807489?compact=1" 
                height="399" 
                width="504" 
                frameBorder="0" 
                allowFullScreen={true} 
                title="Embedded post"
              ></iframe>
              <div 
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '-30px',
                  background: '#e63946',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  transform: 'rotate(5deg)',
                  boxShadow: '0 5px 15px rgba(230, 57, 70, 0.6)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}
              >
                Coming Soon!
              </div>
            </div>
          </div>

          <div style={{ ...fadeInDelay3, display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <button style={{ 
              backgroundColor: '#e63946',
              boxShadow: '0 5px 20px rgba(230, 57, 70, 0.5)',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
            }}>Pre-Order Now</button>
            <button style={{ 
              backgroundColor: 'transparent', 
              borderRadius: '50px', 
              border: '2px solid #e63946',
              color: '#e63946',
              boxShadow: '0 5px 20px rgba(230, 57, 70, 0.3)'
            }}>Join Discord</button>
          </div>

          <div style={{ 
            marginTop: '60px', 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '40px',
            ...fadeInDelay3
          }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.5rem', color: '#e63946', marginBottom: '5px' }}>2025</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.7, margin: 0 }}>Release Date</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.5rem', color: '#e63946', marginBottom: '5px' }}>PC & Console</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.7, margin: 0 }}>Platforms</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.5rem', color: '#e63946', marginBottom: '5px' }}>E for Everyone</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.7, margin: 0 }}>Rating</p>
            </div>
          </div>
        </div>

        {/* Removed modal since video is embedded directly */}
      </section>
    </>
  );
}

export default Hero;
