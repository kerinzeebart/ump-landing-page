import React from 'react';
import '../App.css';
import GradientBackground from './GradientBackground';

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: 'transparent', 
      color: 'var(--light-text)', 
      padding: '60px 20px 40px',
      position: 'relative',
      marginTop: '80px',
      borderTop: '1px solid rgba(230, 57, 70, 0.2)',
      overflow: 'hidden',
      minHeight: '800px'
    }}>
      {/* Gradient Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        <GradientBackground />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1, textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '40px',
          textAlign: 'left',
          marginBottom: '50px'
        }}>
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--primary-color)' }}>UMCP</h3>
            <p style={{ color: 'var(--light-text)', lineHeight: '1.6', marginBottom: '20px' }}>
              A cozy stealth-action game where brave chickens rescue eggs, build sanctuaries, and develop unique abilities.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              {/* Social Media Icons */}
              <a href="#" style={{ color: 'var(--light-text)', fontSize: '20px', transition: 'color 0.3s ease', '&:hover': { color: 'var(--primary-color)' } }} title="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" style={{ color: 'white', fontSize: '20px', transition: 'color 0.3s ease' }} title="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" style={{ color: 'white', fontSize: '20px', transition: 'color 0.3s ease' }} title="Discord">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 9C18 9 16.5 7.5 14 7.5C11.5 7.5 10 9 10 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20.5 4.5L19.5 9L18.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.5 4.5L10.5 9L11.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 16.5C14 17.6046 13.1046 18.5 12 18.5C10.8954 18.5 10 17.6046 10 16.5C10 15.3954 10.8954 14.5 12 14.5C13.1046 14.5 14 15.3954 14 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 12.5V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 12.5V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--primary-color)' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'var(--light-text)', textDecoration: 'none', transition: 'color 0.3s ease', '&:hover': { color: 'var(--primary-color)' } }}>Home</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#features" style={{ color: 'var(--light-text)', textDecoration: 'none', transition: 'color 0.3s ease', '&:hover': { color: 'var(--primary-color)' } }}>Features</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#characters" style={{ color: 'var(--light-text)', textDecoration: 'none', transition: 'color 0.3s ease', '&:hover': { color: 'var(--primary-color)' } }}>Characters</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#gameplay" style={{ color: 'var(--light-text)', textDecoration: 'none', transition: 'color 0.3s ease', '&:hover': { color: 'var(--primary-color)' } }}>Gameplay</a></li>
              <li><a href="#" style={{ color: 'var(--light-text)', textDecoration: 'none', transition: 'color 0.3s ease', '&:hover': { color: 'var(--primary-color)' } }}>Pre-Order</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--primary-color)' }}>Contact</h3>
            <p style={{ color: 'var(--light-text)', marginBottom: '15px' }}>
              Have questions about Ultra Mega Chicken Patrol? Reach out to us!  
            </p>
            <a href="mailto:info@umcp-game.com" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 'bold' }}>info@umcp-game.com</a>
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--primary-color)' }}>Newsletter</h3>
            <p style={{ color: 'var(--light-text)', marginBottom: '15px' }}>
              Subscribe to our newsletter for updates on game development, release dates, and special offers.
            </p>
            <div style={{ display: 'flex' }}>
              <input 
                type="email" 
                placeholder="Your email address" 
                style={{ 
                  padding: '12px 15px',
                  borderRadius: '4px 0 0 4px',
                  border: 'none',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'var(--light-text)',
                  width: '100%',
                  fontSize: '1rem'
                }}
              />
              <button style={{ 
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                border: 'none',
                borderRadius: '0 4px 4px 0',
                padding: '0 15px',
                cursor: 'pointer',
                boxShadow: '0 0 15px rgba(230, 57, 70, 0.3)'
              }}>Subscribe</button>
            </div>
          </div>
        </div>
        
        {/* Creator Information Section */}
        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
          paddingTop: '30px', 
          marginBottom: '30px', 
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--primary-color)' }}>Created By</h3>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--light-text)', marginBottom: '5px' }}>
              Bartosz Barlowski
            </p>
            <p style={{ color: 'var(--light-text)', marginBottom: '15px' }}>
              Unreal Engine Certified Instructor
            </p>
            <p style={{ color: 'var(--light-text)', lineHeight: '1.6', textAlign: 'center', marginBottom: '15px' }}>
              Specializing in virtual production and gaming projects, with experience in remote and on-set production, behind-the-scenes insights, and creative development.
            </p>
            <a href="https://www.barlowski.com" target="_blank" rel="noopener noreferrer" style={{ 
              color: 'var(--primary-color)', 
              textDecoration: 'none', 
              fontWeight: 'bold',
              transition: 'color 0.3s ease',
              '&:hover': { textDecoration: 'underline' }
            }}>
              www.barlowski.com
            </a>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '30px', marginTop: '30px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ color: 'var(--light-text)' }}>&copy; 2025 Ultra Mega Chicken Patrol. All rights reserved.</p>
          <div>
            <a href="#" style={{ color: 'var(--light-text)', marginLeft: '20px', textDecoration: 'none', fontSize: '0.9rem', '&:hover': { color: 'var(--primary-color)' } }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--light-text)', marginLeft: '20px', textDecoration: 'none', fontSize: '0.9rem', '&:hover': { color: 'var(--primary-color)' } }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
