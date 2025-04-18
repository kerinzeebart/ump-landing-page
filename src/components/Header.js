import React, { useState, useEffect } from 'react';
import '../App.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
    padding: scrolled ? '10px 20px' : '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease'
  };

  const logoStyle = {
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    fontSize: scrolled ? '1.8rem' : '2.2rem',
    transition: 'font-size 0.3s ease'
  };

  const navStyle = {
    display: 'flex',
    gap: '30px'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    position: 'relative',
    padding: '5px 0',
    transition: 'color 0.3s ease'
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: '#e63946'
  };

  return (
    <header style={headerStyle}>
      <h1 style={logoStyle}>
        <span style={{ color: '#e63946' }}>UMCP</span>
        <span style={{ fontSize: '0.8em', marginLeft: '10px', fontWeight: 'normal', color: '#495057' }}>Chicken Patrol</span>
      </h1>
      <nav style={navStyle}>
        <a href="#features" style={linkStyle}>Features</a>
        <a href="#characters" style={linkStyle}>Characters</a>
        <a href="#gameplay" style={linkStyle}>Gameplay</a>
        <a href="#download" style={{...activeLinkStyle, position: 'relative'}}>
          Demo
          <span style={{
            position: 'absolute',
            top: '-12px',
            right: '-20px', // Moved 25px to the left (from -45px to -20px)
            backgroundColor: '#e63946',
            color: 'white',
            fontSize: '0.6rem',
            padding: '3px 8px',
            borderRadius: '10px',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            transform: 'rotate(15deg)',
            animation: 'pulse 2s infinite',
            whiteSpace: 'nowrap', // Ensures text doesn't wrap
            zIndex: 1001 // Ensures it's above other elements
          }}>
            COMING SOON
          </span>
          <style>{`
            @keyframes pulse {
              0% { transform: rotate(15deg) scale(1); }
              50% { transform: rotate(15deg) scale(1.1); }
              100% { transform: rotate(15deg) scale(1); }
            }
          `}</style>
        </a>
      </nav>
    </header>
  );
}

export default Header;
