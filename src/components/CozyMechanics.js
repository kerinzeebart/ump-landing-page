import React from 'react';
import '../App.css';

function CozyMechanics() {
  return (
    <section id="cozy-mechanics" style={{ 
      backgroundColor: 'var(--dark-bg)', 
      padding: '100px 0 80px',
      color: 'var(--light-text)',
      overflow: 'hidden' // Prevent horizontal scrolling on mobile
    }}>
      <div className="container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px',
        width: '100%',
        boxSizing: 'border-box' // Ensure padding is included in width calculation
      }}>
        <h2 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3rem)', // Responsive font size
          textAlign: 'center', 
          marginBottom: '30px',
          color: 'var(--primary-color)',
          padding: '0 10px'
        }}>Core Cozy Mechanics</h2>
        <p style={{ 
          fontSize: 'clamp(1rem, 3vw, 1.4rem)', // Responsive font size
          textAlign: 'center', 
          maxWidth: '800px', 
          margin: '0 auto 60px',
          color: 'var(--secondary-color)',
          padding: '0 15px'
        }}>
          Experience the perfect blend of relaxing gameplay and engaging strategy
        </p>
        
        {/* Mechanics List */}
        <div className="mechanics-wrapper">
          {/* 1. Gentle Lighting & Growth System */}
          <div className="mechanic-item" style={{ 
            backgroundColor: 'var(--dark-secondary)',
            borderRadius: '16px',
            padding: 'clamp(20px, 5vw, 40px)', // Responsive padding
            marginBottom: '40px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden' // Prevent content overflow
          }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              flexWrap: 'wrap',
              alignItems: 'center', 
              marginBottom: '20px',
              gap: '15px' // Add gap for better spacing when wrapping
            }}>
              <div style={{ 
                backgroundColor: 'rgba(230, 57, 70, 0.2)',
                color: 'var(--primary-color)',
                height: '50px',
                width: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginRight: '20px'
              }}>1</div>
              <h3 style={{ 
                fontSize: 'clamp(1.3rem, 4vw, 1.8rem)', // Responsive font size
                color: 'var(--primary-color)',
                margin: 0,
                wordBreak: 'break-word', // Prevent overflow on small screens
                hyphens: 'auto'
              }}>Gentle Lighting & Growth System</h3>
            </div>
            
            <div style={{ 
              marginLeft: 'clamp(0px, 5vw, 70px)', // Responsive margin
              width: '100%',
              boxSizing: 'border-box',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              alignItems: 'flex-start'
            }}>
              <div style={{ flex: '1', minWidth: '280px' }}>
                <div style={{ marginBottom: '25px' }}>
                  <h4 style={{ 
                    fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', // Responsive font size
                    color: 'var(--secondary-color)',
                    marginBottom: '10px',
                    wordBreak: 'break-word', // Prevent overflow on small screens
                    hyphens: 'auto'
                  }}>Colorful LED Lights</h4>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '10px',
                    marginBottom: '10px'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      backgroundColor: 'rgba(230, 57, 70, 0.1)',
                      borderRadius: '10px',
                      padding: '12px',
                    }}>
                      <span role="img" aria-label="chicken" style={{ marginRight: '10px', fontSize: '1.2rem' }}>🐔</span>
                      <div>Drag-and-drop green/blue lights (Australian research) to boost chicken happiness.</div>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      backgroundColor: 'rgba(230, 57, 70, 0.1)',
                      borderRadius: '10px',
                      padding: '12px',
                    }}>
                      <span role="img" aria-label="sparkles" style={{ marginRight: '10px', fontSize: '1.2rem' }}>✨</span>
                      <div>Visual feedback: Chickens glow softly under optimal lighting, and their feathers shimmer.</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 style={{ 
                    fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', // Responsive font size
                    color: 'var(--secondary-color)',
                    marginBottom: '10px',
                    wordBreak: 'break-word', // Prevent overflow on small screens
                    hyphens: 'auto'
                  }}>Growth Progress</h4>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '10px',
                    marginBottom: '10px'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      backgroundColor: 'rgba(230, 57, 70, 0.1)',
                      borderRadius: '10px',
                      padding: '12px',
                    }}>
                      <span role="img" aria-label="egg" style={{ marginRight: '10px', fontSize: '1.2rem' }}>🥚</span>
                      <div>Track weight gain via a "Chicken Happiness Meter" (no timers—just visual cues like bigger eggs or fluffier feathers).</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{ flex: '1', minWidth: '200px', position: 'relative' }}>
                <img 
                  src="/images/growth-system.png" 
                  alt="Chicken Growth System" 
                  style={{ 
                    width: '100%',
                    borderRadius: '12px',
                    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
                    border: '2px solid rgba(230, 57, 70, 0.3)',
                    objectFit: 'cover'
                  }} 
                />
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  backgroundColor: 'rgba(18, 18, 18, 0.7)',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  color: 'var(--light-text)',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  Growth System
                </div>
              </div>
            </div>
          </div>
          
          {/* 2. Cozy Climate Control */}
          <div className="mechanic-item" style={{ 
            backgroundColor: 'var(--dark-secondary)',
            borderRadius: '16px',
            padding: 'clamp(20px, 5vw, 40px)', // Responsive padding
            marginBottom: '40px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden' // Prevent content overflow
          }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              flexWrap: 'wrap',
              alignItems: 'center', 
              marginBottom: '20px',
              gap: '15px' // Add gap for better spacing when wrapping
            }}>
              <div style={{ 
                backgroundColor: 'rgba(244, 162, 97, 0.2)',
                color: 'var(--secondary-color)',
                height: '50px',
                width: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginRight: '20px'
              }}>2</div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                color: 'var(--secondary-color)',
                margin: 0
              }}>Cozy Climate Control</h3>
            </div>
            
            <div style={{ 
              marginLeft: 'clamp(0px, 5vw, 70px)', // Responsive margin
              width: '100%',
              boxSizing: 'border-box',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              alignItems: 'flex-start'
            }}>
              <div style={{ flex: '1', minWidth: '280px' }}>
                <div style={{ marginBottom: '25px' }}>
                  <h4 style={{ 
                    fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', // Responsive font size
                    color: 'var(--secondary-color)',
                    marginBottom: '10px',
                    wordBreak: 'break-word', // Prevent overflow on small screens
                    hyphens: 'auto'
                  }}>Temperature Management</h4>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '10px',
                    marginBottom: '10px'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      backgroundColor: 'rgba(244, 162, 97, 0.1)',
                      borderRadius: '10px',
                      padding: '12px',
                    }}>
                      <span role="img" aria-label="fire" style={{ marginRight: '10px', fontSize: '1.2rem' }}>🔥</span>
                      <div>Place heaters/coolers as cute, stylized objects (e.g., a tiny wood stove for winter).</div>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      backgroundColor: 'rgba(244, 162, 97, 0.1)',
                      borderRadius: '10px',
                      padding: '12px',
                    }}>
                      <span role="img" aria-label="snowflake" style={{ marginRight: '10px', fontSize: '1.2rem' }}>❄️</span>
                      <div>Chickens visibly respond to temperature changes (e.g., fluffing feathers when cold).</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{ flex: '1', minWidth: '200px', position: 'relative' }}>
                <img 
                  src="/images/cozy-climate-control.png" 
                  alt="Cozy Climate Control" 
                  style={{ 
                    width: '100%',
                    borderRadius: '12px',
                    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
                    border: '2px solid rgba(244, 162, 97, 0.3)',
                    objectFit: 'cover'
                  }} 
                />
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  backgroundColor: 'rgba(18, 18, 18, 0.7)',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  color: 'var(--light-text)',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  Climate Control
                </div>
              </div>
            </div>
          </div>
          
          {/* 3. Wholesome Feed Crafting */}
          <div className="mechanic-item" style={{ 
            backgroundColor: 'var(--dark-secondary)',
            borderRadius: '16px',
            padding: 'clamp(20px, 5vw, 40px)', // Responsive padding
            marginBottom: '40px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden' // Prevent content overflow
          }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              flexWrap: 'wrap',
              alignItems: 'center', 
              marginBottom: '20px',
              gap: '15px' // Add gap for better spacing when wrapping
            }}>
              <div style={{ 
                backgroundColor: 'rgba(82, 183, 136, 0.2)',
                color: 'var(--accent-color)',
                height: '50px',
                width: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginRight: '20px'
              }}>3</div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                color: 'var(--accent-color)',
                margin: 0
              }}>Wholesome Feed Crafting</h3>
            </div>
            
            <div style={{ 
              marginLeft: 'clamp(0px, 5vw, 70px)', // Responsive margin
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ 
                  fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', // Responsive font size
                  color: 'var(--secondary-color)',
                  marginBottom: '10px',
                  wordBreak: 'break-word', // Prevent overflow on small screens
                  hyphens: 'auto'
                }}>Recipe-Based Feeding</h4>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '10px',
                  marginBottom: '10px'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    backgroundColor: 'rgba(82, 183, 136, 0.1)',
                    borderRadius: '10px',
                    padding: '12px',
                  }}>
                    <span role="img" aria-label="corn" style={{ marginRight: '10px', fontSize: '1.2rem' }}>🌽</span>
                    <div>Mix starter/grower/finisher feeds using a mini-game (drag grains into a bowl).</div>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    backgroundColor: 'rgba(82, 183, 136, 0.1)',
                    borderRadius: '10px',
                    padding: '12px',
                  }}>
                    <span role="img" aria-label="herb" style={{ marginRight: '10px', fontSize: '1.2rem' }}>🌿</span>
                    <div>Unlock Australian-inspired enzyme feed for +10% happiness.</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 style={{ 
                  fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', // Responsive font size
                  color: 'var(--secondary-color)',
                  marginBottom: '10px',
                  wordBreak: 'break-word', // Prevent overflow on small screens
                  hyphens: 'auto'
                }}>Reward</h4>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '10px',
                  marginBottom: '10px'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    backgroundColor: 'rgba(82, 183, 136, 0.1)',
                    borderRadius: '10px',
                    padding: '12px',
                  }}>
                    <span role="img" aria-label="trophy" style={{ marginRight: '10px', fontSize: '1.2rem' }}>🏆</span>
                    <div>Happy chickens lay "Golden Eggs" that unlock decorations (e.g., flower gardens).</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 4. Odor & Neighbor Relations */}
          <div className="mechanic-item" style={{ 
            backgroundColor: 'var(--dark-secondary)',
            borderRadius: '16px',
            padding: 'clamp(20px, 5vw, 40px)', // Responsive padding
            marginBottom: '40px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden' // Prevent content overflow
          }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              flexWrap: 'wrap',
              alignItems: 'center', 
              marginBottom: '20px',
              gap: '15px' // Add gap for better spacing when wrapping
            }}>
              <div style={{ 
                backgroundColor: 'rgba(244, 162, 97, 0.2)',
                color: 'var(--secondary-color)',
                height: '50px',
                width: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginRight: '20px'
              }}>4</div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                color: 'var(--secondary-color)',
                margin: 0
              }}>Odor & Neighbor Relations</h3>
            </div>
            
            <div style={{ 
              marginLeft: 'clamp(0px, 5vw, 70px)', // Responsive margin
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ 
                  fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', // Responsive font size
                  color: 'var(--secondary-color)',
                  marginBottom: '10px',
                  wordBreak: 'break-word', // Prevent overflow on small screens
                  hyphens: 'auto'
                }}>Manure Management</h4>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '10px',
                  marginBottom: '10px'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    backgroundColor: 'rgba(244, 162, 97, 0.1)',
                    borderRadius: '10px',
                    padding: '12px',
                  }}>
                    <span role="img" aria-label="compost" style={{ marginRight: '10px', fontSize: '1.2rem' }}>🌱</span>
                    <div>Compost piles attract helpful beetles (no penalties—just a fun minigame to collect nutrients).</div>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    backgroundColor: 'rgba(244, 162, 97, 0.1)',
                    borderRadius: '10px',
                    padding: '12px',
                  }}>
                    <span role="img" aria-label="farmer" style={{ marginRight: '10px', fontSize: '1.2rem' }}>👨‍🌾</span>
                    <div>Polish neighbors visit to praise your farm's cleanliness, gifting ribbons or seeds.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 5. Disease Prevention */}
          <div className="mechanic-item" style={{ 
            backgroundColor: 'var(--dark-secondary)',
            borderRadius: '16px',
            padding: 'clamp(20px, 5vw, 40px)', // Responsive padding
            marginBottom: '40px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden' // Prevent content overflow
          }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              flexWrap: 'wrap',
              alignItems: 'center', 
              marginBottom: '20px',
              gap: '15px' // Add gap for better spacing when wrapping
            }}>
              <div style={{ 
                backgroundColor: 'rgba(230, 57, 70, 0.2)',
                color: 'var(--primary-color)',
                height: '50px',
                width: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginRight: '20px'
              }}>5</div>
              <h3 style={{ 
                fontSize: 'clamp(1.3rem, 4vw, 1.8rem)', // Responsive font size
                color: 'var(--primary-color)',
                margin: 0,
                wordBreak: 'break-word', // Prevent overflow on small screens
                hyphens: 'auto'
              }}>Disease Prevention (No Stress!)</h3>
            </div>
            
            <div style={{ 
              marginLeft: 'clamp(0px, 5vw, 70px)', // Responsive margin
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ 
                  fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', // Responsive font size
                  color: 'var(--secondary-color)',
                  marginBottom: '10px',
                  wordBreak: 'break-word', // Prevent overflow on small screens
                  hyphens: 'auto'
                }}>Salmonella Mini-Game</h4>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '10px',
                  marginBottom: '10px'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    backgroundColor: 'rgba(230, 57, 70, 0.1)',
                    borderRadius: '10px',
                    padding: '12px',
                  }}>
                    <span role="img" aria-label="broom" style={{ marginRight: '10px', fontSize: '1.2rem' }}>🧹</span>
                    <div>Clean coops by swiping leaves/dust (simple touchscreen-friendly action).</div>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    backgroundColor: 'rgba(230, 57, 70, 0.1)',
                    borderRadius: '10px',
                    padding: '12px',
                  }}>
                    <span role="img" aria-label="sleeping" style={{ marginRight: '10px', fontSize: '1.2rem' }}>😴</span>
                    <div>Failure: Chickens get "sad" but recover after a good night's rest.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Game Modes Section */}
        <h2 style={{ 
          fontSize: '2.5rem', 
          textAlign: 'center', 
          margin: '80px 0 30px',
          color: 'var(--primary-color)'
        }}>Cozy Progression & Story</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', // Responsive grid with minimum size constraint
          gap: '30px',
          marginBottom: '60px',
          width: '100%'
        }}>
          {/* Campaign Mode */}
          <div style={{ 
            backgroundColor: 'var(--dark-secondary)',
            borderRadius: '16px',
            padding: 'clamp(20px, 5vw, 40px)', // Responsive padding
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden' // Prevent content overflow
          }}>
            <h3 style={{ 
              fontSize: 'clamp(1.3rem, 4vw, 1.8rem)', // Responsive font size
              color: 'var(--primary-color)',
              marginBottom: '20px',
              textAlign: 'center',
              wordBreak: 'break-word', // Prevent overflow on small screens
              hyphens: 'auto'
            }}>Campaign Mode: "The Polish Dream"</h3>
            
            <div style={{ position: 'relative', marginBottom: '25px' }}>
              <img 
                src="/images/Craft-Chicken-Backstories.png" 
                alt="Craft Chicken Backstories"
                style={{ 
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                  border: '2px solid rgba(244, 162, 97, 0.3)',
                  marginBottom: '15px',
                  objectFit: 'cover'
                }} 
              />
              <div style={{
                position: 'absolute',
                bottom: '25px',
                right: '15px',
                backgroundColor: 'rgba(18, 18, 18, 0.7)',
                padding: '8px 12px',
                borderRadius: '8px',
                color: 'var(--light-text)',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                Craft Chicken Backstories
              </div>
            </div>
            <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              <strong>Goal:</strong> Turn a struggling Polish farm into a sustainable, EU-certified coop.
            </p>
            
            <h4 style={{ 
              fontSize: '1.3rem', 
              color: 'var(--secondary-color)',
              marginBottom: '15px' 
            }}>Steps:</h4>
            
            <div style={{ marginBottom: '15px', paddingLeft: '20px' }}>
              <p style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: '5px' }}>Spring:</p>
              <p>Fix broken fences, adopt chicks, and learn lighting basics.</p>
            </div>
            
            <div style={{ marginBottom: '15px', paddingLeft: '20px' }}>
              <p style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: '5px' }}>Summer:</p>
              <p>Install Australian cooling tech to survive heatwaves.</p>
            </div>
            
            <div style={{ marginBottom: '15px', paddingLeft: '20px' }}>
              <p style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: '5px' }}>Autumn:</p>
              <p>Host a harvest festival to earn EU certification.</p>
            </div>
            
            <div style={{ paddingLeft: '20px' }}>
              <p style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: '5px' }}>Winter:</p>
              <p>Decorate the coop with lights and sell Golden Eggs at the market.</p>
            </div>
          </div>
          
          {/* Endless Mode */}
          <div style={{ 
            backgroundColor: 'var(--dark-secondary)',
            borderRadius: '16px',
            padding: 'clamp(20px, 5vw, 40px)', // Responsive padding
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden' // Prevent content overflow
          }}>
            <h3 style={{ 
              fontSize: '1.8rem', 
              color: 'var(--secondary-color)',
              marginBottom: '20px',
              textAlign: 'center'
            }}>Endless Mode: "Coop Paradise"</h3>
            
            <p style={{ lineHeight: '1.6' }}>
              Relax in a fully upgraded farm, breeding rare chickens (e.g., Polish crested chickens) and decorating freely.
            </p>
            
            <div style={{ 
              marginTop: '40px', 
              backgroundColor: 'rgba(82, 183, 136, 0.1)', 
              padding: '20px', 
              borderRadius: '12px',
              border: '1px solid rgba(82, 183, 136, 0.3)'
            }}>
              <h4 style={{ 
                fontSize: '1.3rem', 
                color: 'var(--accent-color)',
                marginBottom: '15px',
                textAlign: 'center'
              }}>Cozy Aesthetic</h4>
              
              <h5 style={{ fontSize: '1.1rem', color: 'var(--secondary-color)', marginBottom: '10px' }}>Art Style:</h5>
              <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
                Bright pastel colors, rounded UI, and chickens with oversized anime-style eyes.
                Polish-inspired farmhouses with floral patterns and Australian outback-themed decorations (e.g., tiny kangaroo statues).
              </p>
              
              <h5 style={{ fontSize: '1.1rem', color: 'var(--secondary-color)', marginBottom: '10px' }}>Soundtrack:</h5>
              <p style={{ lineHeight: '1.6' }}>
                Gentle piano melodies, chicken clucks, and wind chimes.
              </p>
            </div>
          </div>
        </div>
        
        {/* Social & Education Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', // Responsive grid with minimum size constraint
          gap: '30px',
          marginBottom: '60px',
          width: '100%'
        }}>
          {/* Cozy Social System */}
          <div style={{ 
            backgroundColor: 'var(--dark-secondary)',
            borderRadius: '16px',
            padding: 'clamp(20px, 5vw, 40px)', // Responsive padding
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden' // Prevent content overflow
          }}>
            <h3 style={{ 
              fontSize: '1.8rem', 
              color: 'var(--primary-color)',
              marginBottom: '30px',
              textAlign: 'center'
            }}>Cozy Social System</h3>
            
            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ 
                fontSize: '1.3rem', 
                color: 'var(--secondary-color)',
                marginBottom: '15px' 
              }}>Neighbors:</h4>
              
              <div style={{ 
                display: 'flex', 
                gap: 'clamp(10px, 3vw, 20px)', // Responsive gap
                flexWrap: 'wrap', 
                justifyContent: 'space-between',
                width: '100%'
              }}>
                <div style={{ 
                  flex: '1', 
                  minWidth: 'min(100%, 200px)', // Responsive min-width
                  backgroundColor: 'rgba(230, 57, 70, 0.1)', 
                  padding: 'clamp(15px, 3vw, 20px)', // Responsive padding
                  borderRadius: '12px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <div style={{ position: 'relative', width: '120px', height: '120px' }}>
                    <img 
                      src="/images/zofia.png" 
                      alt="Zofia" 
                      style={{ 
                        width: '100%',
                        height: '100%',
                        borderRadius: '60px',
                        objectFit: 'cover',
                        border: '2px solid rgba(230, 57, 70, 0.5)'
                      }} 
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <h5 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '10px' }}>Zofia (Polish grandma)</h5>
                    <p>Teaches recipes and shares pierogi.</p>
                  </div>
                </div>
                
                <div style={{ 
                  flex: '1', 
                  minWidth: 'min(100%, 200px)', // Responsive min-width
                  backgroundColor: 'rgba(244, 162, 97, 0.1)', 
                  padding: 'clamp(15px, 3vw, 20px)', // Responsive padding
                  borderRadius: '12px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <div style={{ position: 'relative', width: '120px', height: '120px' }}>
                    <img 
                      src="/images/dr-kozlowski.png" 
                      alt="Dr. Kozlowski" 
                      style={{ 
                        width: '100%',
                        height: '100%',
                        borderRadius: '60px',
                        objectFit: 'cover',
                        border: '2px solid rgba(244, 162, 97, 0.5)'
                      }} 
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <h5 style={{ fontSize: '1.1rem', color: 'var(--secondary-color)', marginBottom: '10px' }}>Dr. Kozlowski (vet)</h5>
                    <p>Gifts free upgrades for high welfare scores.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 style={{ 
                fontSize: '1.3rem', 
                color: 'var(--secondary-color)',
                marginBottom: '15px' 
              }}>Events:</h4>
              
              <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                <li>Weekly farmers' markets (no pressure—sell eggs or just chat with NPCs).</li>
                <li>Seasonal festivals (e.g., "Chicken Ball" dance party).</li>
              </ul>
            </div>
          </div>
          
          {/* Educational Touches */}
          <div style={{ 
            backgroundColor: 'var(--dark-secondary)',
            borderRadius: '16px',
            padding: 'clamp(20px, 5vw, 40px)', // Responsive padding
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden' // Prevent content overflow
          }}>
            <h3 style={{ 
              fontSize: '1.8rem', 
              color: 'var(--secondary-color)',
              marginBottom: '30px',
              textAlign: 'center'
            }}>Educational Touches (Subtle)</h3>
            
            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ 
                fontSize: '1.3rem', 
                color: 'var(--secondary-color)',
                marginBottom: '15px' 
              }}>"Fun Fact" Booklets:</h4>
              
              <div style={{ backgroundColor: 'rgba(82, 183, 136, 0.1)', padding: '20px', borderRadius: '12px' }}>
                <p style={{ marginBottom: '10px' }}>Unlockable in-game books about:</p>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                  <li>"Why Australian chickens glow under blue light!"</li>
                  <li>"Polish mega-farms vs. cozy coops: A tale of two systems"</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 style={{ 
                fontSize: '1.3rem', 
                color: 'var(--secondary-color)',
                marginBottom: '15px' 
              }}>Achievements:</h4>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                <div style={{ 
                  flex: '1', 
                  minWidth: 'min(100%, 200px)', // Responsive min-width
                  backgroundColor: 'rgba(230, 57, 70, 0.1)', 
                  padding: '15px', 
                  borderRadius: '12px',
                  border: '1px solid rgba(230, 57, 70, 0.3)'
                }}>
                  <h5 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '5px' }}>"Eco Hero"</h5>
                  <p>Reduce CO₂ by 30% using Australian techniques.</p>
                </div>
                
                <div style={{ 
                  flex: '1', 
                  minWidth: 'min(100%, 200px)', // Responsive min-width
                  backgroundColor: 'rgba(244, 162, 97, 0.1)', 
                  padding: '15px', 
                  borderRadius: '12px',
                  border: '1px solid rgba(244, 162, 97, 0.3)'
                }}>
                  <h5 style={{ fontSize: '1.1rem', color: 'var(--secondary-color)', marginBottom: '5px' }}>"Neighbor's Favorite"</h5>
                  <p>Keep odor levels low for 7 days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Monetization & Why It's Cozy */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
          gap: '30px'
        }}>
          {/* Monetization */}
          <div style={{ 
            backgroundColor: 'var(--dark-secondary)',
            borderRadius: '16px',
            padding: 'clamp(20px, 5vw, 40px)', // Responsive padding
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden' // Prevent content overflow
          }}>
            <h3 style={{ 
              fontSize: 'clamp(1.3rem, 4vw, 1.8rem)', // Responsive font size
              color: 'var(--primary-color)',
              marginBottom: '20px',
              textAlign: 'center',
              wordBreak: 'break-word', // Prevent overflow on small screens
              hyphens: 'auto'
            }}>Monetization (Cozy-Friendly)</h3>
            
            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ 
                fontSize: '1.3rem', 
                color: 'var(--secondary-color)',
                marginBottom: '10px' 
              }}>Base Game:</h4>
              <p style={{ 
                textAlign: 'center', 
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', // Responsive font size
                fontWeight: 'bold', 
                color: 'var(--accent-color)',
                backgroundColor: 'rgba(82, 183, 136, 0.1)',
                padding: 'clamp(10px, 2vw, 15px)', // Responsive padding
                borderRadius: '12px',
                marginBottom: '30px',
                width: '100%',
                boxSizing: 'border-box'
              }}>$15 (includes all content)</p>
            </div>
            
            <div>
              <h4 style={{ 
                fontSize: '1.3rem', 
                color: 'var(--secondary-color)',
                marginBottom: '15px' 
              }}>DLC:</h4>
              
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 'clamp(15px, 3vw, 25px)', // Responsive gap
                width: '100%'
              }}>
                <div style={{ 
                  backgroundColor: 'rgba(244, 162, 97, 0.1)', 
                  padding: '20px', 
                  borderRadius: '12px',
                  border: '1px solid rgba(244, 162, 97, 0.3)'
                }}>
                  <h5 style={{ fontSize: '1.1rem', color: 'var(--secondary-color)', marginBottom: '10px' }}>Aussie Outback Pack</h5>
                  <p>Koala-themed coop decorations.</p>
                </div>
                
                <div style={{ 
                  backgroundColor: 'rgba(230, 57, 70, 0.1)', 
                  padding: '20px', 
                  borderRadius: '12px',
                  border: '1px solid rgba(230, 57, 70, 0.3)'
                }}>
                  <h5 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '10px' }}>Polish Winter Wonderland</h5>
                  <p>Snowy farm skin + pierogi recipe.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Why It's Cozy */}
          <div style={{ 
            backgroundColor: 'var(--dark-secondary)',
            borderRadius: '16px',
            padding: 'clamp(20px, 5vw, 40px)', // Responsive padding
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden' // Prevent content overflow
          }}>
            <h3 style={{ 
              fontSize: '1.8rem', 
              color: 'var(--secondary-color)',
              marginBottom: '30px',
              textAlign: 'center'
            }}>Why It's Cozy</h3>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '25px'
            }}>
              <div style={{ 
                backgroundColor: 'rgba(230, 57, 70, 0.1)', 
                padding: 'clamp(15px, 3vw, 25px)', // Responsive padding
                borderRadius: '12px',
                width: '100%',
                boxSizing: 'border-box'
              }}>
                <h4 style={{ 
                  fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', // Responsive font size
                  color: 'var(--primary-color)',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap', // Allow wrapping on small screens
                  wordBreak: 'break-word', // Prevent overflow on small screens
                  hyphens: 'auto'
                }}>
                  <span style={{ marginRight: '10px' }}>🌈</span>
                  No Punishments
                </h4>
                <p style={{ lineHeight: '1.6' }}>
                  Mistakes lead to gentle reminders (e.g., a chicken nuzzling your hand to signal it's hungry).
                </p>
              </div>
              
              <div style={{ 
                backgroundColor: 'rgba(244, 162, 97, 0.1)', 
                padding: '25px', 
                borderRadius: '12px'
              }}>
                <h4 style={{ 
                  fontSize: '1.3rem', 
                  color: 'var(--secondary-color)',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ marginRight: '10px' }}>🕰️</span>
                  Slow Pace
                </h4>
                <p style={{ lineHeight: '1.6' }}>
                  Progress at your own speed—no timers or urgent quests.
                </p>
              </div>
              
              <div style={{ 
                backgroundColor: 'rgba(82, 183, 136, 0.1)', 
                padding: '25px', 
                borderRadius: '12px'
              }}>
                <h4 style={{ 
                  fontSize: '1.3rem', 
                  color: 'var(--accent-color)',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ marginRight: '10px' }}>✨</span>
                  Rewarding Feedback
                </h4>
                <p style={{ lineHeight: '1.6' }}>
                  Every action (e.g., planting clover) feels meaningful and visually satisfying.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CozyMechanics;
