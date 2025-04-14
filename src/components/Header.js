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
        <a href="#download" style={activeLinkStyle}>Pre-Order</a>
      </nav>
    </header>
  );
}

export default Header;
