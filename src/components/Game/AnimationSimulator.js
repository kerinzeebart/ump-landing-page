// AnimationSimulator.js
// Simulation system for MCP pet animations without server dependency

// Animation types
const ActionType = {
  IDLE: 'idle',
  EATING: 'eating',
  SNACK: 'snack',
  FEAST: 'feast',
  BATH: 'bath',
  PLAYING_BALL: 'playing_ball',
  PLAYING_CHASE: 'playing_chase',
  PLAYING_PUZZLE: 'playing_puzzle',
  SLEEPING: 'sleeping',
  SICK: 'sick',
  BANANA_EATING: 'banana_eating'
};

// Pet stats structure
class PetStats {
  constructor() {
    this.hunger = 70;
    this.happiness = 70;
    this.health = 80;
    this.energy = 80;
    this.cleanliness = 70;
  }
}

// Pet class for simulation
class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.age = 0;
    this.stats = new PetStats();
    this.lastFed = Date.now();
    this.lastPlayed = Date.now();
    this.lastCleaned = Date.now();
    this.lastSlept = Date.now();
    this.isSick = false;
    this.isSleeping = false;
  }
  
  feed(food) {
    const hungerIncrease = food === 'snack' ? 10 : food === 'meal' ? 25 : 50;
    this.stats.hunger = Math.min(100, this.stats.hunger + hungerIncrease);
    this.stats.happiness = Math.min(100, this.stats.happiness + 5);
    this.lastFed = Date.now();
    return food === 'snack' ? ActionType.SNACK : ActionType.FEAST;
  }
  
  play(activity) {
    const happinessIncrease = activity === 'ball' ? 15 : activity === 'chase' ? 20 : 25;
    const energyDecrease = activity === 'ball' ? 10 : activity === 'chase' ? 15 : 10;
    
    this.stats.happiness = Math.min(100, this.stats.happiness + happinessIncrease);
    this.stats.energy = Math.max(0, this.stats.energy - energyDecrease);
    this.stats.cleanliness = Math.max(0, this.stats.cleanliness - 5);
    this.lastPlayed = Date.now();
    
    return activity === 'ball' ? ActionType.PLAYING_BALL : 
           activity === 'chase' ? ActionType.PLAYING_CHASE : 
           ActionType.PLAYING_PUZZLE;
  }
  
  clean() {
    this.stats.cleanliness = 100;
    this.stats.health = Math.min(100, this.stats.health + 5);
    this.lastCleaned = Date.now();
    return ActionType.BATH;
  }
  
  sleep() {
    this.stats.energy = 100;
    this.isSleeping = true;
    this.lastSlept = Date.now();
    return ActionType.SLEEPING;
  }
  
  wakeUp() {
    this.isSleeping = false;
  }
  
  getStatus() {
    // Simulate stat decay based on time elapsed
    const now = Date.now();
    const hoursSinceLastFed = (now - this.lastFed) / (1000 * 60 * 60);
    const hoursSinceLastPlayed = (now - this.lastPlayed) / (1000 * 60 * 60);
    const hoursSinceLastCleaned = (now - this.lastCleaned) / (1000 * 60 * 60);
    const hoursSinceLastSlept = (now - this.lastSlept) / (1000 * 60 * 60);
    
    // Decay stats based on time (but at a slow rate for demo purposes)
    this.stats.hunger = Math.max(0, this.stats.hunger - hoursSinceLastFed * 2);
    this.stats.happiness = Math.max(0, this.stats.happiness - hoursSinceLastPlayed * 2);
    this.stats.cleanliness = Math.max(0, this.stats.cleanliness - hoursSinceLastCleaned * 1.5);
    this.stats.energy = Math.max(0, this.stats.energy - hoursSinceLastSlept * 1.5);
    
    // Determine pet state based on stats
    let currentState = ActionType.IDLE;
    
    if (this.isSleeping) {
      currentState = ActionType.SLEEPING;
    } else if (this.isSick) {
      currentState = ActionType.SICK;
    } else if (this.stats.hunger < 20) {
      currentState = ActionType.EATING; // Looks hungry
    }
    
    return {
      action: currentState,
      stats: {...this.stats},
      pet: {
        name: this.name,
        type: this.type,
        age: this.age
      }
    };
  }
}

// Cat animations
const catAnimations = {
  idle: [
    `
     /\\_/\\
    ( o.o )
     > ^ <
   `,
    `
     /\\_/\\
    ( -.- )
     > ^ <
   `,
    `
     /\\_/\\
    ( o.o )
      > ^
   `,
    `
     /\\_/\\
    ( -.- )
     > ^ <
   `,
  ],
  
  eating: [
    `
    /\\_/\\
   ( o.o )
   (>^🍎<)
   `,
    `
    /\\_/\\
   ( -.- )
   (>^🍎<)
   `,
    `
    /\\_/\\
   ( o.o )
   (>^🍎<)
   `,
  ],
  
  snack: [
    `
    /\\_/\\
   ( o.o )
   (>^🍪<)
   `,
    `
    /\\_/\\
   ( -.- )
   (>^🍪<)
   `,
    `
   🎉/\\_/\\
  ( o.o )
  (>^🍪<)
  `,
  ],
  
  feast: [
    `
    /\\_/\\
   ( o.o )
   (>^🍗<)
   `,
    `
    /\\_/\\
   ( -.- )
   (>^🍗<)
   `,
    `
   🎉/\\_/\\🎉
  ( o.o )
  (>^❤️<)
  `,
  ],
  
  bath: [
    `
    /\\_/\\
   ( o.o )
     > ^ <
   🚿 🚿 🚿
   `,
    `
    /\\_/\\
   ( -.- )
     > ^ <
   💦 💦 💦
   `,
    `
    /\\_/\\
   ( o.o )
     > ^ <
   🧼 🧼 🧼
   `,
  ],
  
  playing_ball: [
    `
     /\\_/\\
    ( o.o )
     > ^ <
       ⚽
   `,
    `
     /\\_/\\
    ( o.o )
    > ^ < ⚽
   `,
    `
      /\\_/\\
     ( ^.^ )
    ⚽ > ^ <
   `,
  ],
  
  playing_chase: [
    `
     /\\_/\\
    ( o.o )
     > ^ <
       🏃
   `,
    `
     /\\_/\\
    ( ^.^ )
     > ^ < 🏃
   `,
    `
    🎉 /\\_/\\
     ( >.<)
      > ^ < 🏃
   `,
  ],
  
  playing_puzzle: [
    `
     /\\_/\\
    ( o.o )
     > ^ <
      🧩
   `,
    `
     /\\_/\\
    ( ?.? )
     > ^ <
      🧩
   `,
    `
     /\\_/\\
    ( ^.^ )
     > 🧩 <
   `,
  ],
  
  sleeping: [
    `
     /\\_/\\
    ( -.- )
     > ^ <
     💤
   `,
    `
     /\\_/\\
    ( -.- )
     > ^ <
      💤
   `,
    `
     /\\_/\\
    ( -.- )
     > ^ <
    💤  
   `,
  ],
  
  sick: [
    `
     /\\_/\\
    ( T.T )
     > ^ <
    💉`,
  ],
};

// Dog animations
const dogAnimations = {
  idle: [
    `
  /^\\___/^\\
 /  o   o  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    `,
  ],
  
  eating: [
    `
  /^\\___/^\\
 /  o   o  \\
 V   🍎   V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V   🍎   V
  \\  ___  /
   \\/   \\/
    `,
  ],
  
  snack: [
    `
  /^\\___/^\\
 /  o   o  \\
 V   🍪   V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V   🍪   V
  \\  ___  /
   \\/   \\/
    `,
  ],
  
  feast: [
    `
  /^\\___/^\\
 /  o   o  \\
 V   🍗   V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V   🍗   V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  ^   ^  \\
 V   ❤️   V
  \\  ___  /
   \\/   \\/
    `,
  ],
  
  bath: [
    `
  /^\\___/^\\
 /  o   o  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    🚿 🚿
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    💦 💦
    `,
  ],
  
  playing_ball: [
    `
  /^\\___/^\\
 /  o   o  \\
 V    V    V
  \\  ___  /
   \\/   \\/
     ⚽
    `,
    `
  /^\\___/^\\
 /  ^   ^  \\
 V    V    V
  \\  ___  /
   \\/   \\/ ⚽
    `,
  ],
  
  playing_chase: [
    `
  /^\\___/^\\
 /  o   o  \\
 V    V    V
  \\  ___  /
   \\/   \\/
      🏃
    `,
    `
     🏃  /^\\___/^\\
       /  ^   ^  \\
       V    V    V
        \\  ___  /
         \\/   \\/
    `,
  ],
  
  playing_puzzle: [
    `
  /^\\___/^\\
 /  ?   ?  \\
 V    V    V
  \\  ___  /
   \\/   \\/
     🧩
    `,
    `
  /^\\___/^\\
 /  o   o  \\
 V    V    V
  \\  ___  /
   \\/🧩\\/
    `,
  ],
  
  sleeping: [
    `
  /^\\___/^\\
 /  -   -  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    💤
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V    V    V
  \\  ___  /
   \\/   \\/
     💤
    `,
  ],
  
  sick: [
    `
  /^\\___/^\\
 /  T   T  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    💉
    `,
  ],
};

// Dragon animations
const dragonAnimations = {
  idle: [
    `
       / \\
      /   \\
     /     \\
    /       \\
   /         \\
  /           \\
 /\\___/\\___/\\
(  o   |   o  )
 \\    <V>    /
  \\_________/
    `,
    `
       / \\
      /   \\
     /     \\
    /       \\
   /         \\
  /           \\
 /\\___/\\___/\\
(  -   |   -  )
 \\    <V>    /
  \\_________/
    `,
  ],
  
  eating: [
    `
       / \\
      /   \\
     /     \\
    /       \\
   /         \\
  /           \\
 /\\___/\\___/\\
(  o   |   o  )
 \\    <🍎>    /
  \\_________/
    `,
    `
       / \\
      /   \\
     /     \\
    /       \\
   /         \\
  /           \\
 /\\___/\\___/\\
(  -   |   -  )
 \\    <🍎>    /
  \\_________/
    `,
  ],
  
  snack: [
    `
       / \\
      /   \\
     /     \\
    /       \\
   /         \\
  /           \\
 /\\___/\\___/\\
(  o   |   o  )
 \\    <🍪>    /
  \\_________/
    `,
  ],
  
  feast: [
    `
       / \\
      /   \\
     /     \\
    /       \\
   /         \\
  /           \\
 /\\___/\\___/\\
(  o   |   o  )
 \\    <🍗>    /
  \\_________/
    `,
    `
    🔥 / \\ 🔥
      /   \\
     /     \\
    /       \\
   /         \\
  /           \\
 /\\___/\\___/\\
(  ^   |   ^  )
 \\    <❤️>    /
  \\_________/
    `,
  ],
  
  bath: [
    `
       / \\
      /   \\
     /     \\
    /       \\
   /         \\
  /           \\
 /\\___/\\___/\\
(  o   |   o  )
 \\    <V>    /
  \\_________/
      🚿 🚿
    `,
    `
       / \\
      /   \\
     /     \\
    /       \\
   /         \\
  /           \\
 /\\___/\\___/\\
(  -   |   -  )
 \\    <V>    /
  \\_________/
      💦 💦
    `,
  ],
  
  playing_ball: [
    `
       / \\
      /   \\
     /     \\
    /       \\
   /         \\
  /           \\
 /\\___/\\___/\\
(  o   |   o  )
 \\    <V>    /
  \\_________/
       ⚽
    `,
    `
       / \\
      /   \\
     /     \\
    /       \\
   /         \\
  /           \\
 /\\___/\\___/\\
(  ^   |   ^  )
 \\    <V>    /
  \\_______⚽_/
    `,
  ],
  
  playing_chase: [
    `
       / \\
      /   \\
     /     \\
    /       \\
   /         \\
  /           \\
 /\\___/\\___/\\
(  o   |   o  )
 \\    <V>    /
  \\_________/
        🏃
    `,
    `
      🔥/ \\
      /   \\
     /     \\
    /       \\
   /         \\
  /           \\
 /\\___/\\___/\\
(  ^   |   ^  )
 \\    <V>    /
  \\_________/
      🏃‍ 🔥
    `,
  ],
  
  playing_puzzle: [
    `
       / \\
      /   \\
     /     \\
    /       \\
   /         \\
  /           \\
 /\\___/\\___/\\
(  ?   |   ?  )
 \\    <V>    /
  \\_________/
       🧩
    `,
    `
       / \\
      /   \\
     /     \\
    /       \\
   /         \\
  /           \\
 /\\___/\\___/\\
(  ^   |   ^  )
 \\    <🧩>    /
  \\_________/
    `,
  ],
  
  sleeping: [
    `
       / \\
      /   \\
     /     \\
    /       \\
   /         \\
  /           \\
 /\\___/\\___/\\
(  -   |   -  )
 \\    <V>    /
  \\_________/
      💤 💤
    `,
  ],
  
  sick: [
    `
       / \\
      /   \\
     /     \\
    /       \\
   /         \\
  /           \\
 /\\___/\\___/\\
(  T   |   T  )
 \\    <V>    /
  \\_________/
       💉
    `,
  ],
};

// Chicken animations
const chickenAnimations = {
  idle: [
    `
    \\
    (o>
   /(\\
    U  
    `,
    `
    \\
    (o>
   /(\\\\
    U  
    `,
    `
    \\
    (o>
   /(\\
    U  
    `,
  ],
  
  eating: [
    `
    \\
    (o>
   /(\\  🌾
    U  
    `,
    `
    \\
    (-  🌾
   /(\\
    U  
    `,
    `
    \\
    (o>🌾
   /(\\
    U  
    `,
  ],
  
  snack: [
    `
    \\
    (o>
   /(\\  🌽
    U  
    `,
    `
    \\
    (-  🌽
   /(\\
    U  
    `,
    `
    \\
    (o>🌽
   /(\\
    U  
    `,
  ],
  
  feast: [
    `
    \\
    (o> 🌾
   /(\\  🌽
    U   🍞
    `,
    `
    \\
    (^>🌾
   /(\\\\🌽
    U 🍞
    `,
  ],
  
  bath: [
    `
    \\
    (o>
   /(\\
    U  
     🚿
    `,
    `
    \\
    (o>
   /(\\  💦
    U  
    💦 
    `,
  ],
  
  playing_ball: [
    `
    \\
    (o>
   /(\\
    U   ⚽
    `,
    `
    \\
    (o>
   /(\\  ⚽
    U 
    `,
    `
    \\
    (o>⚽
   /(\\
    U  
    `,
  ],
  
  playing_chase: [
    `
    \\
    (o>
   /(\\
    U  🏃
    `,
    `
     🏃\\
      (o>
     /(\\
      U  
    `,
  ],
  
  playing_puzzle: [
    `
    \\
    (?>
   /(\\
    U  🧩
    `,
    `
    \\
    (o>🧩
   /(\\
    U  
    `,
  ],
  
  sleeping: [
    `
    \\
    (-
   /(\\
    U  
   💤 
    `,
    `
    \\
    (- 💤
   /(\\
    U  
     
    `,
  ],
  
  sick: [
    `
    \\
    (X>
   /(\\
    U  
   💉
    `,
  ],
};

// Map pet types to their animations
const animations = {
  cat: catAnimations,
  dog: dogAnimations,
  dragon: dragonAnimations,
  chicken: chickenAnimations,
};

// Simulator class
class Simulator {
  constructor() {
    this.pets = {};
    this.currentPet = null;
    this.animationFrames = {};
    this.frameIndex = 0;
    this.animationInterval = null;
  }
  
  createPet(name, type) {
    const newPet = new Pet(name, type);
    this.pets[name] = newPet;
    this.currentPet = newPet;
    this.setAnimation(type, ActionType.IDLE);
    return {
      pet: {
        name,
        type,
        stats: newPet.stats
      },
      animation: this.getCurrentFrame()
    };
  }
  
  checkPet() {
    if (!this.currentPet) {
      return { error: 'No pet selected' };
    }
    
    const status = this.currentPet.getStatus();
    this.setAnimation(this.currentPet.type, status.action);
    
    return {
      pet: status.pet,
      stats: status.stats,
      animation: this.getCurrentFrame()
    };
  }
  
  feedPet(food) {
    if (!this.currentPet) {
      return { error: 'No pet selected' };
    }
    
    const action = this.currentPet.feed(food);
    this.setAnimation(this.currentPet.type, action);
    
    return {
      pet: {
        name: this.currentPet.name,
        type: this.currentPet.type,
        stats: this.currentPet.stats
      },
      animation: this.getCurrentFrame()
    };
  }
  
  playWithPet(activity) {
    if (!this.currentPet) {
      return { error: 'No pet selected' };
    }
    
    const action = this.currentPet.play(activity);
    this.setAnimation(this.currentPet.type, action);
    
    return {
      pet: {
        name: this.currentPet.name,
        type: this.currentPet.type,
        stats: this.currentPet.stats
      },
      animation: this.getCurrentFrame()
    };
  }
  
  cleanPet() {
    if (!this.currentPet) {
      return { error: 'No pet selected' };
    }
    
    const action = this.currentPet.clean();
    this.setAnimation(this.currentPet.type, action);
    
    return {
      pet: {
        name: this.currentPet.name,
        type: this.currentPet.type,
        stats: this.currentPet.stats
      },
      animation: this.getCurrentFrame()
    };
  }
  
  putToBed() {
    if (!this.currentPet) {
      return { error: 'No pet selected' };
    }
    
    const action = this.currentPet.sleep();
    this.setAnimation(this.currentPet.type, action);
    
    return {
      pet: {
        name: this.currentPet.name,
        type: this.currentPet.type,
        stats: this.currentPet.stats
      },
      animation: this.getCurrentFrame()
    };
  }
  
  setAnimation(petType, action) {
    // Default to idle if the action doesn't exist
    if (!animations[petType][action]) {
      action = ActionType.IDLE;
    }
    
    this.animationFrames = animations[petType][action];
    this.frameIndex = 0;
    this.startAnimation();
  }
  
  startAnimation() {
    // Clear any existing animation
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
    
    // Start a new animation cycle
    this.frameIndex = 0;
  }
  
  getCurrentFrame() {
    if (!this.animationFrames || this.animationFrames.length === 0) {
      return '';
    }
    
    // Return the current frame and cycle through frames
    const frame = this.animationFrames[this.frameIndex];
    this.frameIndex = (this.frameIndex + 1) % this.animationFrames.length;
    return frame;
  }
  
  getNextFrame() {
    if (!this.animationFrames || this.animationFrames.length === 0) {
      return '';
    }
    
    // Return the current frame and cycle through frames
    const frame = this.animationFrames[this.frameIndex];
    this.frameIndex = (this.frameIndex + 1) % this.animationFrames.length;
    return frame;
  }
}

// Create and export a singleton instance
const simulator = new Simulator();
export default simulator;
