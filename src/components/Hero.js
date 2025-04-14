import React, { useEffect, useState } from 'react';
import '../App.css';
import '../Modal.css';
import MobileDeviceMockupIPhone from './MobileDeviceMockupIPhone';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
  );
}

export default Hero;
