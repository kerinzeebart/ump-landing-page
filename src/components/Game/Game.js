import React, { useState, useEffect } from 'react';
import mcpClient from './MCPClient';
import ChatWithPet from './ChatWithPet';
import { getAnimation } from './mcpetAnimations'; // Import from mcpet animations directly
import AnimatedButton from './AnimatedButton';
import ChickenList from './ChickenList';
import './ChickenList.css';
import './Game.css';

const Game = () => {
  const [chickens, setChickens] = useState([]);
  const [chickenLoading, setChickenLoading] = useState(false);
  const [mcpLogs, setMcpLogs] = useState([]);
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pet, setPet] = useState(null);
  const [petName, setPetName] = useState('Bob');
  const [petType, setPetType] = useState('cat');
  const [petStatus, setPetStatus] = useState('');
  const [animation, setAnimation] = useState('');
  const [error, setError] = useState('');
  const [serverUrl, setServerUrl] = useState('ws://localhost:8080');

  useEffect(() => {
    // Cleanup on component unmount
    return () => {
      if (connected) {
        mcpClient.disconnect();
      }
    };
  }, [connected]);

  // Connect to MCP server
  const connectToServer = async () => {
    try {
      setLoading(true);
      await mcpClient.connect(serverUrl);
      setConnected(true);
      logMcp('Connected to MCP server');
      // Check if we already have a pet
      const existingPet = await mcpClient.checkExistingPet();
      if (existingPet) {
        setPet(existingPet);
        setPetName(existingPet.name);
        setPetType(existingPet.type);
        await checkPet(); // Get initial status
      }
      refreshChickenList();
    } catch (err) {
      setError(`Connection error: ${err.message}`);
      logMcp('Connection error', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle MCP Log
  const logMcp = (message, data = null) => {
    const logEntry = {
      timestamp: new Date().toISOString(),
      message,
      data
    };
    setMcpLogs(prevLogs => [...prevLogs, logEntry]);
  };

  // List chickens
  const refreshChickenList = async () => {
    if (!connected) return;
    
    setChickenLoading(true);
    try {
      const response = await mcpClient.listPets();
      logMcp('List chickens response', response);
      setChickens(response || []);
    } catch (err) {
      setError(`Error listing chickens: ${err.message}`);
    } finally {
      setChickenLoading(false);
    }
  };

  // Create a new pet
  const createPet = async (name, type) => {
    logMcp(`Creating pet: ${name} (${type})`);
    if (!connected) return;
    
    setLoading(true);
    try {
      const response = await mcpClient.callTool('create_pet', { name, type });
      logMcp('create_pet response', response);
      
      // Parse the response
      if (response.content && response.content.length > 0) {
        const textContent = response.content.find(item => item.type === 'text');
        if (textContent) {
          setPetStatus(textContent.text);
        }
        
        // Set the pet
        setPet({ name, type });
        setPetName(name);
        setPetType(type);
        
        // Get animation directly from mcpet animations
        const directAnimation = getAnimation(type, 'create');
        const formattedAscii = directAnimation
          .replace(/\n/g, '<br>')
          .replace(/ /g, '&nbsp;');
        setAnimation(formattedAscii);
        
        // Refresh the chicken list
        refreshChickenList();
      }
    } catch (err) {
      setError(`Error creating pet: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Check pet status
  const checkPet = async () => {
    logMcp('Checking pet status...');
    if (!connected || !pet) return;
    
    setLoading(true);
    try {
      const response = await mcpClient.callTool('check_pet');
      logMcp('check_pet response', response);
      
      // Parse the response
      if (response.content && response.content.length > 0) {
        const textContent = response.content.find(item => item.type === 'text');
        if (textContent) {
          setPetStatus(textContent.text);
        }
        
        // Get animation directly from mcpet animations
        const directAnimation = getAnimation(petType, 'idle');
        const formattedAscii = directAnimation
          .replace(/\n/g, '<br>')
          .replace(/ /g, '&nbsp;');
        setAnimation(formattedAscii);
      }
    } catch (err) {
      setError(`Error checking pet: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Feed the pet
  const feedPet = async (food) => {
    logMcp(`Feeding pet ${food}...`);
    if (!connected || !pet) return;
    
    setLoading(true);
    try {
      const response = await mcpClient.callTool('feed_pet', { food });
      logMcp('feed_pet response', response);
      
      // Parse the response
      if (response.content && response.content.length > 0) {
        const textContent = response.content.find(item => item.type === 'text');
        if (textContent) {
          setPetStatus(textContent.text);
        }
        
        // Get animation directly from mcpet animations
        const directAnimation = getAnimation(petType, 'eat');
        const formattedAscii = directAnimation
          .replace(/\n/g, '<br>')
          .replace(/ /g, '&nbsp;');
        setAnimation(formattedAscii);
      }
    } catch (err) {
      setError(`Error feeding pet: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Play with pet
  const playWithPet = async (activity) => {
    logMcp(`Playing with pet (${activity})...`);
    if (!connected || !pet) return;
    
    setLoading(true);
    try {
      const response = await mcpClient.callTool('play_with_pet', { activity });
      logMcp('play_with_pet response', response);
      
      // Parse the response
      if (response.content && response.content.length > 0) {
        const textContent = response.content.find(item => item.type === 'text');
        if (textContent) {
          setPetStatus(textContent.text);
        }
        
        // Get animation directly from mcpet animations
        const directAnimation = getAnimation(petType, 'play');
        const formattedAscii = directAnimation
          .replace(/\n/g, '<br>')
          .replace(/ /g, '&nbsp;');
        setAnimation(formattedAscii);
      }
    } catch (err) {
      setError(`Error playing with pet: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Clean pet
  const cleanPet = async () => {
    logMcp('Cleaning pet...');
    if (!connected || !pet) return;
    
    setLoading(true);
    try {
      const response = await mcpClient.callTool('clean_pet');
      logMcp('clean_pet response', response);
      
      // Parse the response
      if (response.content && response.content.length > 0) {
        const textContent = response.content.find(item => item.type === 'text');
        if (textContent) {
          setPetStatus(textContent.text);
        }
        
        // Get animation directly from mcpet animations
        const directAnimation = getAnimation(petType, 'bath');
        const formattedAscii = directAnimation
          .replace(/\n/g, '<br>')
          .replace(/ /g, '&nbsp;');
        setAnimation(formattedAscii);
      }
    } catch (err) {
      setError(`Error cleaning pet: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const putToBed = async () => {
    logMcp('Putting pet to bed...');
    if (!connected || !pet) return;
    
    setLoading(true);
    try {
      const response = await mcpClient.callTool('put_to_bed');
      logMcp('put_to_bed response', response);
      
      // Parse the response
      if (response.content && response.content.length > 0) {
        const textContent = response.content.find(item => item.type === 'text');
        if (textContent) {
          setPetStatus(textContent.text);
        }
        
        // Get animation directly from mcpet animations
        const directAnimation = getAnimation(petType, 'sleep');
        const formattedAscii = directAnimation
          .replace(/\n/g, '<br>')
          .replace(/ /g, '&nbsp;');
        setAnimation(formattedAscii);
      }
    } catch (err) {
      setError(`Error putting pet to bed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <h2>Ultra Mega Chicken Patrol</h2>
        {error && <div className="error">{error}</div>}
        
        <div className="server-connection">
          <input 
            type="text" 
            value={serverUrl} 
            onChange={(e) => setServerUrl(e.target.value)}
            placeholder="WebSocket URL" 
          />
          <button 
            onClick={connectToServer} 
            disabled={connected || loading}
          >
            {loading ? 'Connecting...' : (connected ? 'Connected' : 'Connect to MCP')}
          </button>
        </div>
      </div>
      
      <div className="game-content">
        <div className="game-columns">
          {/* Chicken List Column */}
          <div className="chicken-list-column">
            <h3>Chicken List</h3>
            <div className="chicken-list-controls">
              <button onClick={refreshChickenList} disabled={!connected || chickenLoading}>
                {chickenLoading ? 'Loading...' : 'Refresh List'}
              </button>
            </div>
            
            {connected && (
              <ChickenList 
                chickens={chickens} 
                loading={chickenLoading} 
                onSelectChicken={(chicken) => {
                  setPet(chicken);
                  setPetName(chicken.name);
                  setPetType(chicken.type);
                  checkPet();
                }}
              />
            )}
          </div>
          
          {/* MCP Log Column */}
          <div className="mcp-log-column">
            <h3>MCP Log</h3>
            <div className="mcp-log">
              {mcpLogs.map((log, index) => (
                <div key={index} className="mcp-log-entry">
                  <span className="mcp-log-timestamp">{new Date(log.timestamp).toLocaleTimeString()}</span>
                  <span className="mcp-log-message">{log.message}</span>
                  {log.data && (
                    <pre className="mcp-log-data" style={{ background: '#fffbe7', borderRadius: 5, padding: '3px 7px', margin: 0, overflowX: 'auto' }}>{typeof log.data === 'object' ? JSON.stringify(log.data, null, 2) : String(log.data)}</pre>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Pet UI */}
        {connected && (
          !pet ? (
            <div className="create-pet">
              <h3>Create Your Chicken</h3>
              <div className="pet-form">
                <input type="text" id="pet-name" placeholder="Chicken Name" />
                <select id="pet-type">
                  <option value="cat">Cat</option>
                  <option value="dog">Dog</option>
                  <option value="dragon">Dragon</option>
                  <option value="chicken">Chicken</option>
                </select>
                <button
                  onClick={() => {
                    const name = document.getElementById('pet-name').value;
                    const type = document.getElementById('pet-type').value;
                    createPet(name, type);
                  }}
                  disabled={loading}
                >
                  {loading ? 'Creating...' : 'Create Pet'}
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="pet-display">
                <h3 data-component-name="Game">
                  {petName} the {petType.charAt(0).toUpperCase() + petType.slice(1)}
                </h3>
                {animation && (
                  <div className="animation" data-component-name="Game">
                    <pre dangerouslySetInnerHTML={{ __html: animation }} data-component-name="Game" />
                  </div>
                )}
                {petStatus && (
                  <div className="status">
                    <p>{petStatus}</p>
                  </div>
                )}
              </div>
              <div className="pet-controls">
                <h4>Pet Controls</h4>
                <div className="control-section">
                  <div className="control-group">
                    <h5>Status</h5>
                    <AnimatedButton
                      className="control-button status-button"
                      onClick={checkPet}
                      disabled={loading}
                    >
                      <span role="img" aria-label="Status">📊</span> Check Status
                    </AnimatedButton>
                  </div>
                  
                  <div className="control-group">
                    <h5>Feeding</h5>
                    <div className="button-row">
                      <AnimatedButton
                            className="control-button" 
                            onClick={() => feedPet('snack')} 
                            disabled={loading}
                          >
                            <span role="img" aria-label="Snack">🍪</span> Snack
                          </AnimatedButton>
                      <AnimatedButton
                            className="control-button" 
                            onClick={() => feedPet('meal')} 
                            disabled={loading}
                          >
                            <span role="img" aria-label="Meal">🍲</span> Meal
                          </AnimatedButton>
                      <AnimatedButton
                            className="control-button" 
                            onClick={() => feedPet('feast')} 
                            disabled={loading}
                          >
                            <span role="img" aria-label="Feast">🍗</span> Feast
                          </AnimatedButton>
                    </div>
                  </div>
                  
                  <div className="control-group">
                    <h5>Play Time</h5>
                    <div className="button-row">
                      <AnimatedButton
                            className="control-button" 
                            onClick={() => playWithPet('ball')} 
                            disabled={loading}
                          >
                            <span role="img" aria-label="Ball">⚽</span> Ball
                          </AnimatedButton>
                      <AnimatedButton
                            className="control-button" 
                            onClick={() => playWithPet('chase')} 
                            disabled={loading}
                          >
                            <span role="img" aria-label="Chase">🏃</span> Chase
                          </AnimatedButton>
                      <AnimatedButton
                            className="control-button" 
                            onClick={() => playWithPet('puzzle')} 
                            disabled={loading}
                          >
                            <span role="img" aria-label="Puzzle">��</span> Puzzle
                          </AnimatedButton>
                    </div>
                  </div>
                  
                  <div className="control-group">
                    <h5>Care</h5>
                    <div className="button-row">
                      <AnimatedButton
                            className="control-button" 
                            onClick={cleanPet} 
                            disabled={loading}
                          >
                            <span role="img" aria-label="Clean">🛁</span> Clean
                          </AnimatedButton>
                      <AnimatedButton
                            className="control-button" 
                            onClick={putToBed} 
                            disabled={loading}
                          >
                            <span role="img" aria-label="Sleep">💤</span> Sleep
                          </AnimatedButton>
                    </div>
                  </div>
                </div>
                
                {loading && <div className="loading-indicator">Processing action...</div>}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Game;
