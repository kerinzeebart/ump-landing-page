import React, { useState } from 'react';
import '../App.css';

function Characters() {
  const [activeCharacter, setActiveCharacter] = useState(0);
  
  const characters = [
    {
      id: 0,
      name: 'Plucker',
      role: 'Parkour/Stealth',
      image: '/images/Chicken_Plucker.jpg',
      description: 'The agile infiltration specialist of the team. With lightning-fast reflexes and unparalleled climbing abilities, Plucker can reach places others can\'t even dream of accessing.',
      abilities: ['Wall Jump', 'Silent Takedown', 'Shadow Blend'],
      stats: {
        stealth: 95,
        strength: 60,
        speed: 90,
        intelligence: 75
      },
      quote: "If they can't see you, they can't catch you."
    },
    {
      id: 1,
      name: 'Cluck Norris',
      role: 'Tank/Defense',
      image: '/images/FatChicken.png',
      description: 'The powerhouse of the Chicken Patrol. With his incredible strength and unwavering courage, Cluck Norris stands as the first line of defense against any threat to the sanctuary.',
      abilities: ['Ground Pound', 'Feather Shield', 'Intimidating Crow'],
      stats: {
        stealth: 40,
        strength: 95,
        speed: 65,
        intelligence: 70
      },
      quote: "Sometimes the best stealth is making a lot of noise somewhere else."
    },
    {
      id: 2,
      name: 'Henrietta',
      role: 'Tech/Support',
      image: '/images/SupportChicken.jpg',
      description: 'The brains behind the operation. Henrietta\'s technical genius allows the team to overcome security systems and communicate effectively during missions.',
      abilities: ['Hack Systems', 'Deploy Drones', 'Remote Assistance'],
      stats: {
        stealth: 70,
        strength: 45,
        speed: 65,
        intelligence: 98
      },
      quote: "Every security system has a weakness. I just find them faster than most."
    },
    {
      id: 3,
      name: 'Colonel Sanders',
      role: 'Leader/Strategist',
      image: '/images/TacticalChicken.png',
      description: 'The veteran leader of the Ultra Mega Chicken Patrol. With years of experience in covert operations, the Colonel plans each mission with meticulous detail.',
      abilities: ['Rally Cry', 'Strategic Planning', 'Battlefield Control'],
      stats: {
        stealth: 80,
        strength: 75,
        speed: 60,
        intelligence: 90
      },
      quote: "A good plan today is better than a perfect plan tomorrow."
    }
  ];
  
  const handleCharacterClick = (id) => {
    setActiveCharacter(id);
  };

  const renderStatBar = (value) => {
    return (
      <div style={{ width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.1)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
        <div 
          style={{ 
            width: `${value}%`, 
            backgroundColor: 'var(--primary-color)', 
            height: '100%', 
            borderRadius: '4px',
            transition: 'width 0.5s ease',
            boxShadow: '0 0 10px rgba(230, 57, 70, 0.5)'
          }}
        ></div>
      </div>
    );
  };

  return (
    <section id="characters" style={{ 
      background: 'linear-gradient(135deg, var(--dark-bg) 0%, var(--dark-secondary) 100%)', 
      textAlign: 'center',
      paddingTop: '100px'
    }}
      data-component-name="Characters"
    >
      <div className="container" data-component-name="Characters">
        <h2>Meet the Team</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto 60px', fontSize: '1.2rem', color: 'var(--secondary-color)' }}>
          Each member of the Ultra Mega Chicken Patrol brings unique skills to the mission
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginBottom: '50px' }}>
          {characters.map((character) => (
            <div 
              key={character.id}
              onClick={() => handleCharacterClick(character.id)}
              style={{ 
                cursor: 'pointer',
                padding: '15px',
                borderRadius: '50%',
                border: activeCharacter === character.id ? '4px solid #e63946' : '4px solid transparent',
                transition: 'all 0.3s ease',
                transform: activeCharacter === character.id ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              <img 
                src={character.image} 
                alt={character.name} 
                className="character-img"
                style={{ 
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  filter: activeCharacter === character.id ? 'none' : 'grayscale(70%)',
                }}
              />
            </div>
          ))}
        </div>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          alignItems: 'center',
          gap: '40px',
          maxWidth: '1200px', 
          margin: '0 auto',
          padding: '40px',
          backgroundColor: 'var(--dark-secondary)',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
        }}>
          <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
            <img 
              src={characters[activeCharacter].image} 
              alt={characters[activeCharacter].name} 
              style={{ 
                width: '100%',
                maxWidth: '300px',
                borderRadius: '16px',
                border: '5px solid #e63946',
                boxShadow: '0 15px 30px rgba(230, 57, 70, 0.2)'
              }} 
            />
            <div style={{ 
              marginTop: '20px',
              padding: '15px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              fontStyle: 'italic',
              color: 'var(--secondary-color)',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
            }}>
              "{characters[activeCharacter].quote}"
            </div>
          </div>
          
          <div style={{ flex: '1.5', minWidth: '300px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '2.2rem', marginBottom: '5px', color: 'var(--primary-color)' }}>{characters[activeCharacter].name}</h3>
            <div style={{ 
              display: 'inline-block',
              padding: '5px 15px',
              backgroundColor: '#e63946',
              color: 'white',
              borderRadius: '20px',
              fontSize: '0.9rem',
              marginBottom: '20px'
            }}>
              {characters[activeCharacter].role}
            </div>
            
            <p style={{ marginBottom: '30px', fontSize: '1.1rem', color: 'var(--light-text)' }}>
              {characters[activeCharacter].description}
            </p>
            
            <h4 style={{ marginBottom: '15px', color: '#e63946' }}>Special Abilities</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
              {characters[activeCharacter].abilities.map((ability, index) => (
                <div key={index} style={{ 
                  padding: '8px 16px',
                  backgroundColor: 'rgba(230, 57, 70, 0.1)',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  border: '1px solid rgba(230, 57, 70, 0.3)',
                  color: 'var(--light-text)'
                }}>
                  {ability}
                </div>
              ))}
            </div>
            
            <h4 style={{ marginBottom: '15px', color: '#e63946' }}>Stats</h4>
            <div style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', color: 'var(--light-text)' }}>
                <span>Stealth</span>
                <span>{characters[activeCharacter].stats.stealth}%</span>
              </div>
              {renderStatBar(characters[activeCharacter].stats.stealth)}
            </div>
            <div style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', color: 'var(--light-text)' }}>
                <span>Strength</span>
                <span>{characters[activeCharacter].stats.strength}%</span>
              </div>
              {renderStatBar(characters[activeCharacter].stats.strength)}
            </div>
            <div style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', color: 'var(--light-text)' }}>
                <span>Speed</span>
                <span>{characters[activeCharacter].stats.speed}%</span>
              </div>
              {renderStatBar(characters[activeCharacter].stats.speed)}
            </div>
            <div style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', color: 'var(--light-text)' }}>
                <span>Intelligence</span>
                <span>{characters[activeCharacter].stats.intelligence}%</span>
              </div>
              {renderStatBar(characters[activeCharacter].stats.intelligence)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Characters;
