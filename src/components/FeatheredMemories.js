import React from 'react';
import '../App.css';

function FeatheredMemories() {
  return (
    <section id="feathered-memories" style={{ 
      backgroundColor: 'var(--dark-bg)', 
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
        }}>Feathered Memories</h2>
        <p style={{ 
          fontSize: 'clamp(1rem, 3vw, 1.4rem)', 
          textAlign: 'center', 
          maxWidth: '800px', 
          margin: '0 auto 60px',
          color: 'var(--secondary-color)',
          padding: '0 15px'
        }}>
          Where AI-driven personalities create a living, breathing chicken community
        </p>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          alignItems: 'center',
          gap: '40px',
          backgroundColor: 'var(--dark-secondary)',
          borderRadius: '16px',
          padding: 'clamp(20px, 5vw, 40px)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          marginBottom: '40px'
        }}>
          <div style={{ flex: '1', minWidth: '300px', position: 'relative' }}>
            <img 
              src="/images/Feathered-Memories.png" 
              alt="Feathered Memories" 
              style={{ 
                width: '100%',
                borderRadius: '12px',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                border: '2px solid rgba(230, 57, 70, 0.3)',
                objectFit: 'cover'
              }} 
            />
          </div>
          
          <div style={{ flex: '1', minWidth: '300px', textAlign: 'left' }}>
            <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '20px', color: 'var(--primary-color)' }}>
              AI-Driven Chicken Personalities
            </h3>
            
            <div style={{ 
              backgroundColor: 'rgba(230, 57, 70, 0.1)', 
              padding: '20px', 
              borderRadius: '12px',
              marginBottom: '20px'
            }}>
              <p style={{ marginBottom: '15px', color: 'var(--light-text)', lineHeight: '1.6' }}>
                As your farm grows, these AI-driven personalities interact with each other and respond to your world in surprisingly emotional ways. Maybe Henrietta, the philosophical hen you've raised from an egg, becomes fascinated with the stars and starts a chicken astronomy club. Or perhaps Colonel Cluckles, crafted with a background as a retired adventurer, mentors younger chicks with tales of his journeys.
              </p>
              <p style={{ marginBottom: '15px', color: 'var(--light-text)', lineHeight: '1.6' }}>
                All of this happens seamlessly within Unreal Engine, creating a cozy world where the stories you help shape become an integral part of your farm's evolving narrative. Every chicken remembers your interactions, develops relationships with other characters, and contributes to your sanctuary's unique atmosphere.
              </p>
              <p style={{ color: 'var(--light-text)', lineHeight: '1.6' }}>
                Feathered Memories combines the intrigue of rediscovering your mysterious past with the joy of nurturing a cozy chicken community where each resident has a story as meaningful as your own. After all, even an immortal chicken needs a place—and a flock—to call home.
              </p>
            </div>
            
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '15px',
              marginTop: '25px'
            }}>
              <div style={{ 
                padding: '10px 20px',
                backgroundColor: 'rgba(230, 57, 70, 0.2)',
                borderRadius: '30px',
                color: 'var(--light-text)',
                fontWeight: 'bold',
                fontSize: '0.9rem'
              }}>
                Evolving Relationships
              </div>
              <div style={{ 
                padding: '10px 20px',
                backgroundColor: 'rgba(244, 162, 97, 0.2)',
                borderRadius: '30px',
                color: 'var(--light-text)',
                fontWeight: 'bold',
                fontSize: '0.9rem'
              }}>
                Persistent Memories
              </div>
              <div style={{ 
                padding: '10px 20px',
                backgroundColor: 'rgba(82, 183, 136, 0.2)',
                borderRadius: '30px',
                color: 'var(--light-text)',
                fontWeight: 'bold',
                fontSize: '0.9rem'
              }}>
                Unique Personalities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatheredMemories;
