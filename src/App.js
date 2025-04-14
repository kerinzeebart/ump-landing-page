import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CozyMechanics from './components/CozyMechanics';
import Characters from './components/Characters';
import Gameplay from './components/Gameplay';
import VideoGallery from './components/VideoGallery';
import FeatheredMemories from './components/FeatheredMemories';
import Connectivity from './components/Connectivity';
import Game from './components/Game/Game';
import Footer from './components/Footer';
import mcpClient from './components/Game/MCPClient';

function App() {
  const [petStatus, setPetStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [connected, setConnected] = useState(false);
  const [currentPet, setCurrentPet] = useState(null);
  
  // Function to execute MCP commands using MCPClient and WebSockets
  const executeMcpCommand = async (command, ...args) => {
    setLoading(true);
    setError(null);
    
    try {
      // Check if we're connected, attempt to reconnect if not
      if (!connected) {
        console.log('Not connected to MCP server, attempting to reconnect...');
        const success = await mcpClient.connect('ws://localhost:8080');
        setConnected(success);
        if (!success) {
          throw new Error('Failed to connect to MCP server');
        }
      }
      
      let response;
      
      switch(command) {
        case 'check_pet':
          console.log('Checking pet status...');
          response = await mcpClient.callTool('mcp0_check_pet');
          break;
        case 'feed_pet':
          const foodType = args[0] || 'snack';
          console.log(`Feeding pet with ${foodType}...`);
          response = await mcpClient.callTool('mcp0_feed_pet', { food: foodType });
          break;
        case 'play_with_pet':
          const activity = args[0] || 'ball';
          console.log(`Playing with pet using ${activity}...`);
          response = await mcpClient.callTool('mcp0_play_with_pet', { activity });
          break;
        case 'clean_pet':
          console.log('Cleaning pet...');
          response = await mcpClient.callTool('mcp0_clean_pet');
          break;
        case 'put_to_bed':
          console.log('Putting pet to bed...');
          response = await mcpClient.callTool('mcp0_put_to_bed');
          break;
        case 'create_pet':
          const name = args[0] || 'Stefan';
          const type = args[1] || 'cat';
          console.log(`Creating new pet: ${name} (${type})...`);
          response = await mcpClient.callTool('mcp0_create_pet', { name, type });
          break;
        default:
          throw new Error(`Unknown command: ${command}`);
      }

      // Process the response
      console.log('Response received:', response);
      
      // Handle different response formats (direct response or content array)
      if (response.content && response.content.length > 0) {
        // Extract text content
        const textContent = response.content.find(item => item.type === 'text');
        if (textContent) {
          setPetStatus(textContent.text);
        }

        // Extract animation/ASCII art
        const animationContent = response.content.find(item => item.type === 'pre');
        if (animationContent) {
          const formattedAscii = animationContent.text
            .replace(/\n/g, '<br>')
            .replace(/ /g, '&nbsp;');
          setPetStatus(prev => formattedAscii + '<br><br>' + (textContent ? textContent.text : ''));
        }
      } else if (response.pet) {
        // Handle direct pet object response (from simulation or newer API)
        console.log('Pet data received:', response.pet);
        setCurrentPet({
          name: response.pet.name,
          type: response.pet.type
        });
        
        // If there's an animation in the response, display it
        if (response.animation) {
          const formattedAscii = response.animation
            .replace(/\n/g, '<br>')
            .replace(/ /g, '&nbsp;');
          setPetStatus(`${formattedAscii}<br><br>${response.pet.name} is a ${response.pet.type}`);
        } else {
          setPetStatus(`${response.pet.name} is a ${response.pet.type}`);
        }
        
        // After creating a pet, immediately check its status to get the animation
        if (command === 'create_pet') {
          setTimeout(() => executeMcpCommand('check_pet'), 500);
        }
      }
      
      // Update current pet state based on text response
      if (response.content) {
        const textContent = response.content.find(item => item.type === 'text');
        const petInfo = textContent ? textContent.text : '';
        if (petInfo.includes('is a')) {
          const petMatch = petInfo.match(/([A-Za-z]+) is a ([a-z]+)/);
          if (petMatch) {
            setCurrentPet({
              name: petMatch[1],
              type: petMatch[2]
            });
          }
        }
      }
    } catch (error) {
      console.error(`Error executing ${command}:`, error);
      setError(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Helper functions for pet interactions
  const checkPet = () => executeMcpCommand('check_pet');
  const feedPet = (food) => executeMcpCommand('feed_pet', food);
  const playWithPet = (activity) => executeMcpCommand('play_with_pet', activity);
  const cleanPet = () => executeMcpCommand('clean_pet');
  const putToBed = () => executeMcpCommand('put_to_bed');
  const createPet = (name, type) => executeMcpCommand('create_pet', name, type);
  
  // Connect to MCP server on component mount
  useEffect(() => {
    const connectToServer = async () => {
      try {
        const success = await mcpClient.connect('ws://localhost:8080');
        setConnected(success);
        if (success) {
          // Use the function directly here to avoid circular reference
          executeMcpCommand('check_pet');
        }
      } catch (err) {
        setError(`Failed to connect to MCP server: ${err.message}`);
      }
    };
    
    connectToServer();
    
    // Cleanup on unmount
    return () => {
      mcpClient.disconnect();
    };
  }, []); // Empty dependency array to run only on mount

  
  return (
    <div className="App">
      <Header />
      <Hero />
      <section className="pet-interaction">
        <h2>Virtual Pet Interaction</h2>

        <div className="connection-status">
          <div style={{
            padding: '5px 10px',
            borderRadius: '15px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            marginBottom: '10px',
            display: 'inline-block',
            backgroundColor: connected ? '#4CAF50' : '#F44336',
            color: 'white'
          }}>
            {connected ? 'Connected to MCP Server' : 'Disconnected'}
          </div>
          {error && <div className="error-message">{error}</div>}
        </div>

        <div className="pet-status-container">
          {petStatus ? (
            <pre dangerouslySetInnerHTML={{ __html: petStatus }} />
          ) : (
            <p>No pet status to display yet. Create or check a pet to begin.</p>
          )}
        </div>

        <div className="pet-controls">
          <button
            onClick={checkPet}
            style={{
              padding: '10px 15px',
              margin: '5px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#4CAF50',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            disabled={loading}>
            Check Pet Status
          </button>
          <button
            onClick={() => feedPet('snack')}
            style={{
              padding: '10px 15px',
              margin: '5px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#2196F3',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            disabled={loading}>
            Feed Snack
          </button>
          <button
            onClick={() => feedPet('meal')}
            style={{
              padding: '10px 15px',
              margin: '5px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#2196F3',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            disabled={loading}>
            Feed Meal
          </button>
          <button
            onClick={() => playWithPet('ball')}
            style={{
              padding: '10px 15px',
              margin: '5px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#FF9800',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            disabled={loading}>
            Play Ball
          </button>
          <button
            onClick={() => playWithPet('chase')}
            style={{
              padding: '10px 15px',
              margin: '5px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#FF9800',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            disabled={loading}>
            Play Chase
          </button>
          <button
            onClick={cleanPet}
            style={{
              padding: '10px 15px',
              margin: '5px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#9C27B0',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            disabled={loading}>
            Clean Pet
          </button>
          <button
            onClick={putToBed}
            style={{
              padding: '10px 15px',
              margin: '5px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#607D8B',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            disabled={loading}>
            Put to Bed
          </button>
        </div>

        <div className="create-pet-form">
          <h3>Create a New Pet</h3>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <input 
              type="text" 
              placeholder="Pet Name" 
              id="petName" 
              style={{ margin: '0 5px', padding: '8px' }}
            />
            <select id="petType" style={{ margin: '0 5px', padding: '8px' }}>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
              <option value="dragon">Dragon</option>
              <option value="chicken">Chicken</option>
            </select>
            <button
              onClick={() => {
                const name = document.getElementById('petName').value || 'Stefan';
                const type = document.getElementById('petType').value;
                createPet(name, type);
              }}
              style={{
                padding: '8px 15px',
                margin: '0 5px',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: '#FF5722',
                color: 'white',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
              disabled={loading}>
              Create Pet
            </button>
          </div>
        </div>

        {loading && <div className="loading">Loading...</div>}
      </section>
      <Features />
      <CozyMechanics />
      <Characters />
      <Gameplay />
      <VideoGallery />
      <FeatheredMemories />
      <Connectivity />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
