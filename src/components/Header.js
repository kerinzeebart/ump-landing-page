import React, { useState } from 'react';
import '../App.css';

function Header({ isScrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const headerStyle = {
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
    padding: isScrolled ? '10px 20px' : '20px',
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
    fontSize: isScrolled ? '1.8rem' : '2.2rem',
    transition: 'font-size 0.3s ease'
  };

  const navStyle = {
    display: 'flex',
    gap: '15px',
    alignItems: 'center'
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

  // Hamburger menu button styles
  const hamburgerStyle = {
    display: 'flex', // Always visible
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '30px',
    height: '21px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    zIndex: 1002,
    marginLeft: '15px'
  };

  const hamburgerLineStyle = {
    width: '100%',
    height: '3px',
    backgroundColor: '#e63946',
    borderRadius: '10px',
    transition: 'all 0.3s ease'
  };

  // Mobile menu styles
  const mobileNavStyle = {
    display: 'flex', // Always available, controlled by position
    position: 'fixed',
    top: 0,
    right: mobileMenuOpen ? '0' : '-100%',
    width: '250px',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    boxShadow: '-5px 0 15px rgba(0,0,0,0.1)',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '50px 20px',
    transition: 'right 0.3s ease-in-out',
    zIndex: 1001
  };

  const mobileLinkStyle = {
    ...linkStyle,
    margin: '15px 0',
    fontSize: '1.2rem',
    textAlign: 'center'
  };

  return (
    <header style={headerStyle}>
      <h1 style={logoStyle}>
        <span style={{ color: '#e63946' }}>UMCP</span>
        <span style={{ fontSize: '0.8em', marginLeft: '10px', fontWeight: 'normal', color: '#495057' }}>Chicken Play</span>
      </h1>
      
      {/* Desktop Navigation */}
      <nav style={navStyle} className="desktop-nav">
        <div style={{ position: 'relative', marginRight: '60px' }}>
          <a href="#download" style={{...activeLinkStyle}}>
            Demo
          </a>
          <div style={{
            position: 'absolute',
            top: '-12px',
            right: '-70px',
            backgroundColor: '#e63946',
            color: 'white',
            fontSize: '0.6rem',
            padding: '3px 8px',
            borderRadius: '10px',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            transform: 'rotate(15deg)',
            animation: 'comingSoonPulse 2s infinite',
            whiteSpace: 'nowrap',
            zIndex: 1001,
            pointerEvents: 'none'
          }}>
            COMING SOON
          </div>
        </div>
      </nav>

      {/* Hamburger Menu Button */}
      <button 
        style={hamburgerStyle} 
        className="hamburger-button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span 
          style={{
            ...hamburgerLineStyle,
            transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'
          }}
        />
        <span 
          style={{
            ...hamburgerLineStyle,
            opacity: mobileMenuOpen ? 0 : 1,
            transform: mobileMenuOpen ? 'translateX(20px)' : 'none'
          }}
        />
        <span 
          style={{
            ...hamburgerLineStyle,
            transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none'
          }}
        />
      </button>

      {/* Mobile Navigation Menu */}
      <nav style={mobileNavStyle} className="mobile-nav">
        <a href="#features" style={mobileLinkStyle} onClick={handleLinkClick}>Features</a>
        <a href="#characters" style={mobileLinkStyle} onClick={handleLinkClick}>Characters</a>
        <a href="#gameplay" style={mobileLinkStyle} onClick={handleLinkClick}>Gameplay</a>
        <a href="#download" style={{...mobileLinkStyle, color: '#e63946', position: 'relative'}} onClick={handleLinkClick}>
          Demo
          <span style={{
            position: 'absolute',
            top: '-12px',
            right: '50%',
            transform: 'translateX(50%) rotate(15deg)',
            backgroundColor: '#e63946',
            color: 'white',
            fontSize: '0.6rem',
            padding: '3px 8px',
            borderRadius: '10px',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            animation: 'pulse 2s infinite',
            whiteSpace: 'nowrap',
            zIndex: 1001
          }}>
            COMING SOON
          </span>
        </a>
      </nav>

      {/* CSS for animations */}
      <style>{`
        @keyframes comingSoonPulse {
          0% { transform: rotate(15deg) scale(1); }
          50% { transform: rotate(15deg) scale(1.1); }
          100% { transform: rotate(15deg) scale(1); }
        }
        
        @keyframes pulse {
          0% { transform: translateX(50%) rotate(15deg) scale(1); }
          50% { transform: translateX(50%) rotate(15deg) scale(1.1); }
          100% { transform: translateX(50%) rotate(15deg) scale(1); }
        }
      `}</style>

      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1000,
          }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}

export default Header;
