import React from 'react';
import '../App.css';

function Gameplay() {
  return (
    <section id="gameplay" style={{ 
      background: 'linear-gradient(135deg, var(--dark-bg) 0%, var(--dark-secondary) 100%)', 
      textAlign: 'center',
      paddingTop: '100px'
    }}
      data-component-name="Gameplay"
    >
      <div className="container" data-component-name="Gameplay">
        <h2>Gameplay Experience</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto 60px', fontSize: '1.2rem', color: 'var(--secondary-color)' }}
          data-component-name="Gameplay"
        >
          A cozy chicken rescue adventure inspired by classic arcade mechanics
        </p>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: '60px',
          maxWidth: '1200px', 
          margin: '0 auto'
        }}>
          {/* Core Gameplay */}
          <div 
            data-component-name="Gameplay"
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              alignItems: 'center',
              gap: '40px',
              backgroundColor: 'var(--dark-secondary)',
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
            }}>
            <div style={{ flex: '1', minWidth: '300px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary-color)' }}>Core Gameplay Loop</h3>
              <p style={{ marginBottom: '20px', color: 'var(--light-text)' }}>
                UMCP merges charming cooperative gameplay with innovative arcade-inspired mechanics from classic games like Tron.
              </p>
              <p style={{ marginBottom: '20px', color: 'var(--light-text)' }}
                data-component-name="Gameplay"
              >
                What truly sets UMCP apart is our innovative implementation of an MCP (<a href="https://www.anthropic.com/news/model-context-protocol" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', textDecoration: 'underline', fontWeight: 'bold' }}>Model Context Protocol</a>) server directly within the Unreal Engine game instance. This groundbreaking approach allows for real-time pet interactions and dynamic environment responses without traditional server limitations, creating a seamless and responsive player experience that blends cozy gaming with sophisticated backend architecture.
              </p>
              <p style={{ marginBottom: '20px', color: 'var(--light-text)' }}>
                The Model Context Protocol server technology enables us to persist player-built sanctuaries across gaming sessions while simultaneously coordinating collaborative gameplay between players. This architecture supports the evolution of in-game pets and environments over time, with the UE5 instance leveraging WebSocket protocols to maintain constant communication with the backend simulation systems—all while maintaining the visual fidelity and performance Unreal Engine is known for.
              </p>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary-color)' }}>Key Features:</h4>
              <ul style={{ color: 'var(--light-text)', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}>Cooperative egg rescue missions</li>
                <li style={{ marginBottom: '10px' }}>Sanctuary building and customization</li>
                <li style={{ marginBottom: '10px' }}>Procedurally generated patrol routes</li>
                <li style={{ marginBottom: '10px' }}>Persistent chicken care and evolution</li>
              </ul>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '15px', color: 'var(--primary-color)' }}>Tamagotchi-Style Progression</h4>
              <p style={{ color: 'var(--light-text)' }}>
                Eggs rescued from intricate human scenarios evolve into chickens with specialized skills, creating a rewarding progression system.
              </p>
            </div>
            <div style={{ flex: '1', minWidth: '300px', position: 'relative' }}>
              <img 
                src="/images/Unreal-Engine-Integration.png" 
                alt="Unreal Engine Integration"
                style={{ 
                  width: '100%',
                  borderRadius: '12px',
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
                Unreal Engine Integration
              </div>
            </div>
          </div>
          
          {/* Mission Structure */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '30px',
            backgroundColor: 'var(--dark-secondary)',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary-color)' }}>Mission Structure</h3>
              <p style={{ marginBottom: '30px', color: 'var(--light-text)' }}>
                Embark on a variety of mission categories, each with unique challenges and environments.
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
                <div style={{ 
                  flex: '1', 
                  minWidth: '200px', 
                  backgroundColor: '#2f343a', 
                  padding: '20px', 
                  borderRadius: '10px',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }} className="feature-card">
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Kitchen Capers</h4>
                  <p style={{ color: 'var(--light-text)' }}>Navigate through busy kitchens to rescue eggs before they become breakfast.</p>
                </div>
                <div style={{ 
                  flex: '1', 
                  minWidth: '200px', 
                  backgroundColor: '#2f343a', 
                  padding: '20px', 
                  borderRadius: '10px',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }} className="feature-card">
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Fair Ground Follies</h4>
                  <p style={{ color: 'var(--light-text)' }}>Rescue eggs from carnival games and egg-and-spoon races.</p>
                </div>
                <div style={{ 
                  flex: '1', 
                  minWidth: '200px', 
                  backgroundColor: '#2f343a', 
                  padding: '20px', 
                  borderRadius: '10px',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }} className="feature-card">
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>School Escapades</h4>
                  <p style={{ color: 'var(--light-text)' }}>Infiltrate science classrooms to free eggs from incubation experiments.</p>
                </div>
                <div style={{ 
                  flex: '1', 
                  minWidth: '200px', 
                  backgroundColor: '#2f343a', 
                  padding: '20px', 
                  borderRadius: '10px',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }} className="feature-card">
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Seasonal Specials</h4>
                  <p style={{ color: 'var(--light-text)' }}>Special holiday-themed missions like Easter egg hunts and Christmas baking.</p>
                </div>
              </div>
            </div>
            
            <div style={{ 
              backgroundColor: '#2f343a', 
              padding: '30px', 
              borderRadius: '16px',
              border: '2px dashed var(--primary-color)',
              textAlign: 'left'
            }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--primary-color)' }}>Mission Spotlight: "Breakfast Blitz"</h4>
              <p style={{ marginBottom: '20px', fontStyle: 'italic', color: 'var(--light-text)' }}>
                A detailed look at one of our exciting missions
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                <div style={{ flex: '1', minWidth: '250px' }}>
                  <h5 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Phase 1: Approach</h5>
                  <p style={{ color: 'var(--light-text)' }}>Plucker uses parkour paths to navigate spatial puzzles while Cluck Norris utilizes brute strength to clear barriers.</p>
                </div>
                <div style={{ flex: '1', minWidth: '250px' }}>
                  <h5 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Phase 2: Infiltration</h5>
                  <p style={{ color: 'var(--light-text)' }}>Plucker stealthily maneuvers through kitchen obstacles while Cluck Norris engages in distraction-based puzzles.</p>
                </div>
                <div style={{ flex: '1', minWidth: '250px' }}>
                  <h5 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Phase 3: Egg Extraction</h5>
                  <p style={{ color: 'var(--light-text)' }}>Cooperation to construct escape mechanisms requiring precision timing and coordination.</p>
                </div>
                <div style={{ flex: '1', minWidth: '250px' }}>
                  <h5 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Phase 4: Escape</h5>
                  <p style={{ color: 'var(--light-text)' }}>Dynamic puzzle-solving where each escape scenario demands tactical improvisation.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Progression System */}
          <div 
            data-component-name="Gameplay"
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              alignItems: 'center',
              gap: '40px',
              backgroundColor: 'var(--dark-secondary)',
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              flexDirection: 'row-reverse' // This will put image on the left and text on the right
            }}>
            <div style={{ flex: '1', minWidth: '300px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary-color)' }}>Progression System</h3>
              <p style={{ marginBottom: '20px', color: 'var(--light-text)' }}>
                As your chicken sanctuary grows, unlock new abilities, areas, and mission types. The progression system is designed to reward both strategic thinking and exploration.
              </p>
              
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '15px', color: 'var(--primary-color)' }}>Plucker's Parkour Evolution</h4>
                <p style={{ color: 'var(--light-text)' }}>
                  Abilities reflecting escalating challenge and precision, such as enhanced agility and tactical aerial maneuvers.
                </p>
              </div>
              
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '15px', color: 'var(--primary-color)' }}>Sanctuary Development</h4>
                <p style={{ color: 'var(--light-text)' }}>
                  Expand your sanctuary with new buildings and facilities that provide gameplay benefits and enhance your chicken community's capabilities.
                </p>
              </div>
            </div>
            
            <div style={{ 
              flex: '1', 
              minWidth: '200px', 
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img 
                src="/images/comic.png" 
                alt="Chicken Comic Progression" 
                style={{ 
                  width: '100%',
                  maxWidth: '300px',
                  borderRadius: '12px',
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                  border: '2px solid rgba(230, 57, 70, 0.3)',
                  objectFit: 'cover'
                }} 
                data-component-name="Gameplay"
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
                Comic Progression
              </div>
            </div>
          </div>
        </div>
        
        {/* Game Elevator Pitch */}
        <div 
          data-component-name="Gameplay"
          style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '30px',
            backgroundColor: 'var(--dark-secondary)',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            marginTop: '60px'
          }}>
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary-color)' }}>Ultra Mega Chicken Patrol: The Ultimate Cozy Revolution</h3>
            <p style={{ marginBottom: '30px', color: 'var(--light-text)', fontStyle: 'italic', fontSize: '1.2rem' }}>
              What if Neko Atsume's cozy collecting, Turbo Chicken Simulator's chaotic charm, and Dungeon Keeper's dark strategic depth had a baby—raised by AI in Unreal Engine 5?
            </p>
            <p style={{ marginBottom: '30px', color: 'var(--light-text)', fontSize: '1.1rem' }}>
              In a world where factory farming has gone too far, a rebellion rises from the henhouse. Welcome to "Kurnik Nadziei" – your chance to build a sanctuary and make a difference, one chicken at a time.
            </p>
            <p style={{ marginBottom: '30px', color: 'var(--light-text)' }}>
              This project blends sandbox simulation, creature collecting, and real-time strategy using Unreal Engine 5's Learning Agents and Model Context Protocol (MCP). Players lure in quirky AI-driven creatures (in this case chickens), manage and expand an lair, assign tasks, and influence behavior—not by scripting, but by training smart agents that learn from their environment and your actions.
            </p>
            <p style={{ marginBottom: '30px', color: 'var(--light-text)' }}>
              Powered by reinforcement learning and AI automation tools, you're not just building a game—you're building a living system. And with MCP, you can use natural language to generate environments, debug agents chickens, and iterate faster than ever.
            </p>
            <p style={{ marginBottom: '30px', color: 'var(--light-text)' }}>
              These are core for giving life to your sandbox world.
            </p>
            
            <div style={{ 
              borderLeft: '3px solid var(--primary-color)', 
              padding: '0 0 0 20px',
              margin: '30px 0'
            }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--secondary-color)' }}>1. Creature Collection & AI Behaviors</h4>
              <ul style={{ color: 'var(--light-text)', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}><strong>Attraction Mechanics (from Neko Atsume):</strong> Place items to attract specific types of AI creatures.</li>
                <li style={{ marginBottom: '10px' }}>Each item or food has a "preference tag" that influences which creatures appear.</li>
                <li style={{ marginBottom: '10px' }}><strong>Adaptive Behavior:</strong> Agents learn optimal paths, actions, or interactions based on environment layout and rewards.</li>
                <li style={{ marginBottom: '10px' }}>Agents "evolve" their behavior over time (e.g., a chicken starts using trampolines more often if it leads to more attention).</li>
                <li style={{ marginBottom: '10px' }}><strong>Emotion / Mood States:</strong> Creatures display emotional states (happy, curious, scared) that influence behavior.</li>
                <li style={{ marginBottom: '10px' }}>Mood can be affected by player interactions or other agents.</li>
              </ul>
            </div>
            
            <div style={{ 
              borderLeft: '3px solid var(--primary-color)', 
              padding: '0 0 0 20px',
              margin: '30px 0'
            }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--secondary-color)' }}>2. Environment & Base Building</h4>
              <p style={{ color: 'var(--light-text)', marginBottom: '15px' }}>
                This is your strategic layer—players actively shape the world.
              </p>
              <ul style={{ color: 'var(--light-text)', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}><strong>Chicken den Construction using PCG tools:</strong> Players can dig, build, or unlock new underground rooms (e.g., Nesting Areas, Kitchens, Training Pits).</li>
                <li style={{ marginBottom: '10px' }}><strong>Room Assignment:</strong> AI agents prefer or require specific room types to live or perform behaviors (like "work", "eat", or "play").</li>
                <li style={{ marginBottom: '10px' }}><strong>Resource Collection & Management:</strong> Creatures or minions gather items like gold, food, or eggs that can be used to build or attract more creatures.</li>
                <li style={{ marginBottom: '10px' }}><strong>AI Role Assignment:</strong> Assign roles to agents (e.g., gatherer, guard, entertainer) that define their behavior profile.</li>
              </ul>
            </div>
            
            <div style={{ 
              borderLeft: '3px solid var(--primary-color)', 
              padding: '0 0 0 20px',
              margin: '30px 0'
            }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--secondary-color)' }}>3. Chaos & Humor</h4>
              <p style={{ color: 'var(--light-text)', marginBottom: '15px' }}>
                Bring in the unpredictability and fun.
              </p>
              <ul style={{ color: 'var(--light-text)', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}><strong>Havoc Events:</strong> Agents occasionally trigger chaos (e.g., a chicken gets into the classroom full of people and player looses control).</li>
                <li style={{ marginBottom: '10px' }}><strong>Silly Physics Interactions:</strong> Agents use physics-based props like trampolines, catapults, or slippery soap floors.</li>
                <li style={{ marginBottom: '10px' }}><strong>Performance Stats:</strong> "Most chaotic chicken," "most food stolen," etc.—used for achievements or rewards.</li>
              </ul>
            </div>
            
            <div style={{ 
              borderLeft: '3px solid var(--primary-color)', 
              padding: '0 0 0 20px',
              margin: '30px 0'
            }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--secondary-color)' }}>4. Player Interaction & Control</h4>
              <p style={{ color: 'var(--light-text)', marginBottom: '15px' }}>
                This is how the player influences the simulation.
              </p>
              <ul style={{ color: 'var(--light-text)', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}><strong>Indirect Influence (like in Neko Atsume):</strong> The player doesn't directly control agents, but they influence them via placement, items, and environments.</li>
                <li style={{ marginBottom: '10px' }}><strong>Direct Commands (like in Dungeon Keeper):</strong> Later upgrades could allow direct orders (e.g., "Go here," "Defend this room")—possibly via a possession mode or priority system.</li>
                <li style={{ marginBottom: '10px' }}><strong>AI-Driven Dialogue (via MCP):</strong> Let the player "talk" to creatures or the world using natural language commands interpreted via MCP:</li>
                <ul style={{ paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '5px' }}>"Why is my chicken fighting with the cat?"</li>
                  <li style={{ marginBottom: '5px' }}>"Create a cozy den with food bowls and hay."</li>
                </ul>
              </ul>
            </div>
            
            <div style={{ 
              borderLeft: '3px solid var(--primary-color)', 
              padding: '0 0 0 20px',
              margin: '30px 0'
            }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--secondary-color)' }}>5. Progression & Collection</h4>
              <p style={{ color: 'var(--light-text)', marginBottom: '15px' }}>
                Tie it all together with goals and collectibles.
              </p>
              <ul style={{ color: 'var(--light-text)', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}><strong>Creature Collection / Journal:</strong> Log entries for each discovered creature, their behaviors, favorite items, and quirks.</li>
                <li style={{ marginBottom: '10px' }}><strong>Unlockables:</strong> Items, rooms, environments, or agent types that unlock based on player behavior or training success.</li>
                <li style={{ marginBottom: '10px' }}><strong>Story Events or Random Encounters:</strong> Trigger scripted or emergent narrative beats (e.g., mysterious egg appears, new species discovered).</li>
              </ul>
            </div>
            
            <div style={{ 
              borderLeft: '3px solid var(--primary-color)', 
              padding: '0 0 0 20px',
              margin: '30px 0'
            }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--secondary-color)' }}>Bonus: Procedural Generation + AI Debug Tools</h4>
              <ul style={{ color: 'var(--light-text)', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}><strong>MCP-Powered Procedural Generation:</strong> Let the AI generate new rooms, challenges, or creatures based on player progress or prompts.</li>
                <li style={{ marginBottom: '10px' }}><strong>AI Behavior Visualizers:</strong> Let the player "see" what agents are thinking via a debug view or thought bubbles.</li>
              </ul>
            </div>
            
            <div style={{ 
              backgroundColor: 'rgba(230, 57, 70, 0.1)', 
              padding: '25px',
              borderRadius: '12px',
              marginTop: '30px'
            }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--primary-color)' }}>Join the Revolution</h4>
              <p style={{ color: 'var(--light-text)', fontSize: '1.1rem', fontWeight: 'bold' }}>
                Ultra Mega Chicken Patrol: Where cozy gameplay meets revolutionary spirit. Build your sanctuary. Rescue the oppressed. Change the world—one chicken at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gameplay;
