import AnimationSimulator from './AnimationSimulator';

class MCPClient {
  constructor() {
    this.connected = false;
    this.tools = [];
    this.socket = null;
    this.requestId = 1;
    this.pendingRequests = {};
    this.petData = {
      name: null,
      type: null,
      created: null,
      mood: 'happy'
    };
    this.onConnectCallbacks = [];
    this.onDisconnectCallbacks = [];
    this.onErrorCallbacks = [];
  }

  // Always use simulation mode for the pitch
  simulationMode = true;
  simulationPet = null;
  animationFrameIndex = 0;
  animationInterval = null;
  
  async connect(url) {
    // For the Epic MegaGrant pitch, we'll always use the simulation mode
    // This ensures all the animations work regardless of server connectivity
    console.log('Using local animation simulation for Epic MegaGrant pitch');
    this.enableSimulationMode();
    this.connected = true;
    
    // Simulate tools available
    this.tools = [
      { name: 'mcp0_check_pet' },
      { name: 'mcp0_feed_pet' },
      { name: 'mcp0_play_with_pet' },
      { name: 'mcp0_clean_pet' },
      { name: 'mcp0_put_to_bed' },
      { name: 'mcp0_create_pet' },
      { name: 'mcp0_list_pets' }
    ];
    
    // Set up animation frame cycling
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
    
    // Update animation frames every 800ms for a nice effect
    this.animationInterval = setInterval(() => {
      if (this.simulationPet) {
        this.updateAnimation();
      }
    }, 800);
    
    // Notify any callbacks that we're connected
    setTimeout(() => {
      this.onConnectCallbacks.forEach(callback => callback());
    }, 100);
    
    return Promise.resolve(true);
  }
  
  enableSimulationMode() {
    console.log('Using animation simulation mode for Epic MegaGrant pitch');
    this.simulationMode = true;
    this.connected = true; // Pretend we're connected
    
    // Create a simulated pet if none exists
    if (!this.simulationPet) {
      this.simulationPet = {
        name: 'Simulated Chicken',
        type: 'chicken',
        stats: {
          hunger: 80,
          happiness: 70,
          health: 90,
          energy: 85,
          cleanliness: 75
        },
        created: new Date().toISOString(),
        mood: 'happy'
      };
    }
  }

  async disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
    this.connected = false;
    this.onDisconnectCallbacks.forEach(callback => callback());
  }

  sendMessage(message) {
    if (!this.connected || !this.socket) {
      throw new Error('Not connected to MCP server');
    }
    
    this.socket.send(JSON.stringify(message));
  }

  async sendRequest(method, params = {}) {
    return new Promise((resolve, reject) => {
      if (!this.connected || !this.socket) {
        reject(new Error('Not connected to MCP server'));
        return;
      }
      
      const id = this.requestId++;
      const request = {
        jsonrpc: '2.0',
        id,
        method,
        params
      };
      
      this.pendingRequests[id] = { resolve, reject };
      
      try {
        this.sendMessage(request);
      } catch (error) {
        delete this.pendingRequests[id];
        reject(error);
      }
    });
  }

  async listTools() {
    try {
      // We'll use hardcoded tools since rpc.discover might not be supported
      this.tools = [
        { name: 'mcp0_create_pet', description: 'Create a new virtual pet' },
        { name: 'mcp0_check_pet', description: 'Check on your pet\'s status' },
        { name: 'mcp0_feed_pet', description: 'Feed your pet' },
        { name: 'mcp0_play_with_pet', description: 'Play with your pet' },
        { name: 'mcp0_clean_pet', description: 'Clean your pet' },
        { name: 'mcp0_put_to_bed', description: 'Put your pet to bed' }
      ];
      return this.tools;
    } catch (error) {
      console.error('Error listing tools:', error);
      throw error;
    }
  }

  async callTool(name, params = {}) {
    console.log(`Calling tool in simulation mode: ${name}`, params);
    return this.simulateResponse(name, params);
  }

  simulateResponse(toolName, params) {
    switch (toolName) {
      case 'mcp0_list_pets': {
        // Return all pets (chickens) in the simulation
        const pets = AnimationSimulator.listPets();
        return {
          content: [
            { type: 'pets', pets }
          ],
          pets
        };
      }
      case 'mcp0_check_pet': {
        if (!this.simulationPet) {
          return {
            content: [
              { type: 'text', text: 'No pet found. Create a pet first!' }
            ]
          };
        }
        
        // Use the AnimationSimulator to get the pet status
        const result = AnimationSimulator.checkPet();
        
        if (result.error) {
          return {
            content: [
              { type: 'text', text: result.error }
            ]
          };
        }
        
        // Format the stats for display
        const statsText = `Hunger: ${Math.round(result.stats.hunger)}%, ` +
                        `Happiness: ${Math.round(result.stats.happiness)}%, ` +
                        `Energy: ${Math.round(result.stats.energy)}%, ` +
                        `Cleanliness: ${Math.round(result.stats.cleanliness)}%`;
        
        return {
          content: [
            { type: 'pre', text: result.animation },
            { type: 'text', text: `${result.pet.name} is a ${result.pet.type}. ${statsText}` }
          ],
          pet: result.pet,
          animation: result.animation
        };
      }
      
      case 'mcp0_create_pet': {
        const { name, type } = params;
        
        // Use the AnimationSimulator to create a pet
        const result = AnimationSimulator.createPet(name, type);
        this.simulationPet = result.pet;
        
        return {
          content: [
            { type: 'pre', text: result.animation },
            { type: 'text', text: `Created a new pet: ${name} is a ${type}!` }
          ],
          pet: result.pet,
          animation: result.animation
        };
      }
      
      case 'mcp0_feed_pet': {
        if (!this.simulationPet) {
          return {
            content: [
              { type: 'text', text: 'No pet found. Create a pet first!' }
            ]
          };
        }
        
        const food = params.food || 'snack';
        
        // Use the AnimationSimulator to feed the pet
        const result = AnimationSimulator.feedPet(food);
        
        if (result.error) {
          return {
            content: [
              { type: 'text', text: result.error }
            ]
          };
        }
        
        return {
          content: [
            { type: 'pre', text: result.animation },
            { type: 'text', text: `${result.pet.name} enjoyed the ${food}!` }
          ],
          pet: result.pet,
          animation: result.animation
        };
      }
      
      case 'mcp0_play_with_pet': {
        if (!this.simulationPet) {
          return {
            content: [
              { type: 'text', text: 'No pet found. Create a pet first!' }
            ]
          };
        }
        
        const activity = params.activity || 'ball';
        
        // Use the AnimationSimulator to play with the pet
        const result = AnimationSimulator.playWithPet(activity);
        
        if (result.error) {
          return {
            content: [
              { type: 'text', text: result.error }
            ]
          };
        }
        
        return {
          content: [
            { type: 'pre', text: result.animation },
            { type: 'text', text: `${result.pet.name} had fun playing ${activity}!` }
          ],
          pet: result.pet,
          animation: result.animation
        };
      }
      
      case 'mcp0_clean_pet': {
        if (!this.simulationPet) {
          return {
            content: [
              { type: 'text', text: 'No pet found. Create a pet first!' }
            ]
          };
        }
        
        // Use the AnimationSimulator to clean the pet
        const result = AnimationSimulator.cleanPet();
        
        if (result.error) {
          return {
            content: [
              { type: 'text', text: result.error }
            ]
          };
        }
        
        return {
          content: [
            { type: 'pre', text: result.animation },
            { type: 'text', text: `${result.pet.name} is now squeaky clean!` }
          ],
          pet: result.pet,
          animation: result.animation
        };
      }
      
      case 'mcp0_put_to_bed': {
        if (!this.simulationPet) {
          return {
            content: [
              { type: 'text', text: 'No pet found. Create a pet first!' }
            ]
          };
        }
        
        // Use the AnimationSimulator to put the pet to bed
        const result = AnimationSimulator.putToBed();
        
        if (result.error) {
          return {
            content: [
              { type: 'text', text: result.error }
            ]
          };
        }
        
        return {
          content: [
            { type: 'pre', text: result.animation },
            { type: 'text', text: `${result.pet.name} is now sleeping peacefully.` }
          ],
          pet: result.pet,
          animation: result.animation
        };
      }
      
      default:
        return {
          content: [
            { type: 'text', text: 'Unsupported action in simulation mode.' }
          ]
        };
    }
  }

  updateAnimation() {
    // This will be called by the animation interval to update the animation frame
    if (this.onAnimationUpdateCallback) {
      const frame = AnimationSimulator.getNextFrame();
      this.onAnimationUpdateCallback(frame);
    }
  }

  processResponse(response) {
    const result = { content: [] };
    
    if (response.ascii) {
      result.content.push({
        type: 'pre',
        text: response.ascii
      });
    } else if (response.animation) {
      // Some endpoints might return animation instead of ascii
      result.content.push({
        type: 'pre',
        text: Array.isArray(response.animation) ? 
          response.animation[Math.floor(Math.random() * response.animation.length)] : 
          response.animation
      });
    }
    
    if (response.message) {
      result.content.push({
        type: 'text',
        text: response.message
      });
    } else if (response.status) {
      // Handle pet status response
      const statusText = response.status;
      result.content.push({
        type: 'text',
        text: statusText
      });
    }
    
    // Fallback for empty responses
    if (result.content.length === 0) {
      result.content.push({
        type: 'text',
        text: JSON.stringify(response)
      });
    }
    
    return result;
  }

  isConnected() {
    return this.connected;
  }

  getAvailableTools() {
    return this.tools;
  }
  
  onConnect(callback) {
    this.onConnectCallbacks.push(callback);
    return this;
  }
  
  onDisconnect(callback) {
    this.onDisconnectCallbacks.push(callback);
    return this;
  }
  
  onError(callback) {
    this.onErrorCallbacks.push(callback);
    return this;
  }
}

// Create a singleton instance
const mcpClient = new MCPClient();
export default mcpClient;
