import React from 'react';
import '../App.css';

function Connectivity() {
  return (
    <section id="connectivity" style={{ 
      background: 'linear-gradient(135deg, var(--dark-bg) 0%, var(--dark-secondary) 100%)', 
      textAlign: 'center',
      paddingTop: '100px',
      paddingBottom: '100px'
    }}>
      <div className="container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <h2 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3rem)', 
          textAlign: 'center', 
          marginBottom: '30px',
          color: 'var(--primary-color)',
          padding: '0 10px'
        }}>Connected Coop Experience</h2>
        <p style={{ 
          fontSize: 'clamp(1rem, 3vw, 1.4rem)', 
          textAlign: 'center', 
          maxWidth: '800px', 
          margin: '0 auto 60px',
          color: 'var(--secondary-color)',
          padding: '0 15px'
        }}>
          Breaking the boundaries between your game and the real world
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', 
          gap: '30px',
          marginBottom: '60px',
          width: '100%'
        }}>
          {/* Discord Integration */}
          <div style={{ 
            backgroundColor: 'var(--dark-secondary)',
            borderRadius: '16px',
            padding: 'clamp(20px, 5vw, 40px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              backgroundColor: 'var(--primary-color)',
              color: 'white',
              padding: '5px 12px',
              borderRadius: '12px',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              opacity: '0.9'
            }}>
              Coming Soon
            </div>
            <div style={{ 
              backgroundColor: 'rgba(114, 137, 218, 0.2)', 
              width: '70px',
              height: '70px',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="#7289DA"/>
              </svg>
            </div>
            
            <h3 style={{ 
              fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
              color: 'var(--primary-color)',
              marginBottom: '15px',
              textAlign: 'left'
            }}>Discord Bot Integration</h3>
            
            <p style={{ 
              color: 'var(--light-text)',
              marginBottom: '20px',
              lineHeight: '1.6',
              textAlign: 'left',
              flex: '1'
            }}>
              UMCP will support Discord integration, allowing players to set up, configure, and check on their coops directly through Discord commands. Using the Model Context Protocol, players can simply ask "What's up in the coop?" and receive real-time updates about their chicken sanctuary.
            </p>
            
            <div style={{ 
              backgroundColor: 'rgba(114, 137, 218, 0.1)',
              padding: '15px',
              borderRadius: '8px',
              marginTop: 'auto'
            }}>
              <p style={{ 
                color: 'var(--light-text)',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                margin: '0',
                textAlign: 'left'
              }}>
                "Hey UMCP Bot, what's happening in my coop right now?"
              </p>
              <p style={{ 
                color: '#7289DA',
                fontSize: '0.9rem',
                marginBottom: '0',
                textAlign: 'left'
              }}>
                "Henrietta is teaching astronomy to the younger chicks, and Colonel Cluckles is patrolling the north fence. Your egg production is up 15% since yesterday!"
              </p>
            </div>
          </div>
          
          {/* Multiplayer Rooms */}
          <div style={{ 
            backgroundColor: 'var(--dark-secondary)',
            borderRadius: '16px',
            padding: 'clamp(20px, 5vw, 40px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              backgroundColor: 'var(--primary-color)',
              color: 'white',
              padding: '5px 12px',
              borderRadius: '12px',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              opacity: '0.9'
            }}>
              Coming Soon
            </div>
            <div style={{ 
              backgroundColor: 'rgba(244, 162, 97, 0.2)', 
              width: '70px',
              height: '70px',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#f4a261" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#f4a261" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#f4a261" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#f4a261" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <h3 style={{ 
              fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
              color: 'var(--secondary-color)',
              marginBottom: '15px',
              textAlign: 'left'
            }}>Public Multiplayer Rooms</h3>
            
            <p style={{ 
              color: 'var(--light-text)',
              marginBottom: '20px',
              lineHeight: '1.6',
              textAlign: 'left',
              flex: '1'
            }}>
              The MCP system will check for available public multiplayer rooms, allowing web players to interact with and influence events in your game. Visitors can help with farm tasks, participate in seasonal festivals, or even introduce new chicken personalities to your sanctuary.
            </p>
            
            <div style={{ 
              backgroundColor: 'rgba(244, 162, 97, 0.1)',
              padding: '15px',
              borderRadius: '8px',
              marginTop: 'auto'
            }}>
              <p style={{ 
                color: 'var(--light-text)',
                fontSize: '0.9rem',
                margin: '0',
                textAlign: 'left'
              }}>
                <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>Active Rooms:</span> Zofia's Kitchen, Egg Hunt 2025, Chicken Astronomy Club, Colonel's Training Ground
              </p>
            </div>
          </div>
          
          {/* Eleven Labs Voice */}
          <div style={{ 
            backgroundColor: 'var(--dark-secondary)',
            borderRadius: '16px',
            padding: 'clamp(20px, 5vw, 40px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              backgroundColor: 'var(--primary-color)',
              color: 'white',
              padding: '5px 12px',
              borderRadius: '12px',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              opacity: '0.9'
            }}>
              Coming Soon
            </div>
            <div style={{ 
              backgroundColor: 'rgba(82, 183, 136, 0.2)', 
              width: '70px',
              height: '70px',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.95 21C17.8667 21 15.8083 20.5457 13.775 19.637C11.7417 18.7283 9.9 17.441 8.25 15.775C6.6 14.1 5.31267 12.254 4.388 10.238C3.46333 8.222 3 6.17267 3 4.09C3 3.71 3.096 3.375 3.288 3.085C3.48 2.795 3.75 2.583 4.1 2.45L8.05 1.05C8.15 1.01667 8.25833 1 8.375 1C8.625 1 8.85 1.075 9.05 1.225C9.25 1.375 9.38333 1.58333 9.45 1.85L10.95 7.3C10.9833 7.56667 10.9793 7.79167 10.938 7.975C10.8967 8.15833 10.8167 8.31667 10.7 8.45L8.1 11C8.63333 11.9 9.21267 12.7373 9.838 13.512C10.4633 14.2867 11.15 15.0333 11.9 15.75C12.6833 16.5 13.471 17.1667 14.263 17.75C15.055 18.3333 15.8667 18.8667 16.7 19.35L19.2 16.9C19.3333 16.7667 19.5083 16.6707 19.725 16.612C19.9417 16.5533 20.1667 16.55 20.4 16.6L25.15 18.45C25.3833 18.5333 25.575 18.675 25.725 18.875C25.875 19.075 25.95 19.3 25.95 19.55C25.95 19.6333 25.9333 19.7167 25.9 19.8L24.1 23.85C23.9667 24.1833 23.7543 24.4583 23.463 24.675C23.1717 24.8917 22.8333 25 22.45 25C22.4167 25 22.3833 25 22.35 25C20.2667 24.8333 18.2667 24.2373 16.35 23.212C14.4333 22.1867 12.7 20.825 11.15 19.125C9.6 17.425 8.32933 15.5457 7.338 13.487C6.34667 11.4283 5.85 9.26667 5.85 7C5.85 6.86667 5.85 6.75 5.85 6.65H5.85L7.05 2.6L5.35 3.05L4.05 6.9C4.08333 8.7 4.46267 10.4293 5.188 12.088C5.91333 13.7467 6.88333 15.2583 8.1 16.625C9.31667 17.9917 10.7333 19.1457 12.35 20.087C13.9667 21.0283 15.6833 21.6667 17.5 22L20.9 20.4L19.95 21Z" fill="#52b788"/>
              </svg>
            </div>
            
            <h3 style={{ 
              fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
              color: 'var(--accent-color)',
              marginBottom: '15px',
              textAlign: 'left'
            }}>Eleven Labs Voice Integration</h3>
            
            <p style={{ 
              color: 'var(--light-text)',
              marginBottom: '20px',
              lineHeight: '1.6',
              textAlign: 'left',
              flex: '1'
            }}>
              Through our integration with Eleven Labs and the Model Context Protocol, your chickens can literally call you! Set up notifications for important events, and receive actual phone calls from your favorite chicken characters, each with their own unique voice and personality.
            </p>
            
            <div style={{ 
              backgroundColor: 'rgba(82, 183, 136, 0.1)',
              padding: '15px',
              borderRadius: '8px',
              marginTop: 'auto'
            }}>
              <p style={{ 
                color: 'var(--light-text)',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                margin: '0',
                textAlign: 'left'
              }}>
                "Hello there! This is Colonel Sanders calling. Just wanted to let you know that we've successfully completed the north fence repairs. The sanctuary is secure once again! Hope to see you soon!"
              </p>
            </div>
          </div>
          
          {/* Polar H10 Integration - Coming Soon */}
          <div style={{ 
            backgroundColor: 'var(--dark-secondary)',
            borderRadius: '16px',
            padding: 'clamp(20px, 5vw, 40px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              backgroundColor: 'var(--primary-color)',
              color: 'white',
              padding: '5px 12px',
              borderRadius: '12px',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              opacity: '0.9'
            }}>
              Coming Soon
            </div>
            
            <div style={{ 
              backgroundColor: 'rgba(230, 57, 70, 0.2)',
              width: '70px',
              height: '70px',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 9C11.45 9 11 9.45 11 10V15C11 15.55 11.45 16 12 16C12.55 16 13 15.55 13 15V10C13 9.45 12.55 9 12 9ZM12 6C11.45 6 11 6.45 11 7C11 7.55 11.45 8 12 8C12.55 8 13 7.55 13 7C13 6.45 12.55 6 12 6Z" fill="#e63946"/>
              </svg>
            </div>
            
            <h3 style={{ 
              fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
              color: 'var(--primary-color)',
              marginBottom: '15px',
              textAlign: 'left'
            }}>Physiological Data Integration</h3>
            
            <div style={{
              marginBottom: '20px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
              border: '2px solid rgba(230, 57, 70, 0.3)'
            }}>
              <img 
                src="/images/Polarp10AppleHealth.png" 
                alt="Polar H10 Apple Health Integration" 
                style={{
                  width: '100%',
                  display: 'block',
                  objectFit: 'cover'
                }}
                data-component-name="Connectivity"
              />
            </div>
            
            <p style={{ 
              color: 'var(--light-text)',
              marginBottom: '20px',
              lineHeight: '1.6',
              textAlign: 'left',
              flex: '1'
            }}>
              An Unreal® Engine project as proof-of-concept for receiving physiological data from Polar® H10 heart rate monitor. A conceivable application could be an exercise game or a physical eSports tournament like «Arena Games Triathlon»™.
            </p>
            
            <div style={{ 
              backgroundColor: 'rgba(230, 57, 70, 0.1)',
              padding: '15px',
              borderRadius: '8px',
              marginTop: 'auto'
            }}>
              <h4 style={{
                fontSize: '1.1rem',
                color: 'var(--primary-color)',
                marginBottom: '10px',
                textAlign: 'left'
              }}>
                Technology Stack
              </h4>
              <ul style={{
                color: 'var(--light-text)',
                textAlign: 'left',
                paddingLeft: '20px',
                marginBottom: '15px',
                lineHeight: '1.4'
              }}>
                <li>Unreal Engine, Polar H10 HR Sensor with Chest Strap, Polar Sensor Logger, Mosquitto</li>
                <li>Bluetooth, USB, MQTT, JSON</li>
                <li>Windows PowerShell, Chocolatey Package Manager, Android Debug Bridge, Wireshark</li>
              </ul>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginTop: '15px'
              }}>
                {['UE', 'PolarH10', 'ECG', 'HR', 'HRM', 'PSL', 'ADB', 'BLE', 'USB', 'PubSub', 'MQTT', 'JSON', 'IOT', 'M2M'].map(tag => (
                  <span key={tag} style={{
                    backgroundColor: 'rgba(230, 57, 70, 0.15)',
                    color: 'var(--primary-color)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connectivity;
