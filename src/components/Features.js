import React from 'react';
import '../App.css';

function Features() {
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

  return (
    <>
      {/* UE5 Engine Game Animation Sample Pack Video */}
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
        
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto 40px' }}>
          <img 
            src="/images/Feathered-Memories.png" 
            alt="Feathered Memories"
            style={{ 
              width: '100%',
              borderRadius: '16px',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
              border: '2px solid rgba(230, 57, 70, 0.3)',
              objectFit: 'cover'
            }} 
          />
          <div style={{
            position: 'absolute',
            bottom: '15px',
            right: '15px',
            backgroundColor: 'rgba(18, 18, 18, 0.7)',
            padding: '8px 12px',
            borderRadius: '8px',
            color: 'var(--light-text)',
            fontSize: '0.9rem',
            fontWeight: 'bold'
          }}>
            Feathered Memories
          </div>
        </div>
        
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
        </div>
      </div>
    </section>
    </>
  );
}

export default Features;
