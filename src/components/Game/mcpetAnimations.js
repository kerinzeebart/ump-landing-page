// Direct import of animations from mcpet source
// This file serves as a direct bridge to the actual animations used in the mcpet system

// Pet type definitions
export const PET_TYPES = ["cat", "dog", "dragon", "chicken"];

// Animation types
export const ACTION_TYPES = [
  "idle",
  "eating",
  "playing_ball",
  "playing_chase",
  "playing_puzzle",
  "bath",
  "sleeping",
  "sick"
];

// Import the actual animations from mcpet
// These are copied directly from /Users/bartoszbarlowski/Pitch/mcpet/src/animations.ts

// Cat animations
export const catAnimations = {
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
   `
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
   `
  ],
  playing_ball: [
    `
   /\\_/\\
  ( o.o )
   >⚽<
  `,
    `
     /\\_/\\
    ( o.o )
     >⚽<
  `
  ],
  playing_chase: [
    `
   /\\_/\\
  ( o.o )
   >🏃<
  `,
    `
     /\\_/\\
    ( o.o )
     >🏃<
  `
  ],
  playing_puzzle: [
    `
   /\\_/\\
  ( o.o )
   >🧩<
  `,
    `
     /\\_/\\
    ( o.o )
     >🧩<
  `
  ],
  bath: [
    `
     /\\_/\\
    ( o.o )
    > ^ <  o
     \\___/ oo
  `,
    `
     /\\_/\\
    ( -.- )
    > ^ < o
     \\___/oo
  `
  ],
  sleeping: [
    `
     /\\_/\\
    ( -.- )
     > ^ <
   `,
    `
     /\\_/\\
    ( -.- )
     > ^ <
   `
  ],
  sick: [
    `
     /\\_/\\
    ( x.x )
     > ^ <
   `,
    `
     /\\_/\\
    ( x.x )
     > ^ <
   `
  ]
};

// Dog animations
export const dogAnimations = {
  idle: [
    `
  /^\\___/^\\
 /  o   o  \\
 V    V    V
`,
    `
  /^\\___/^\\
 /  -   -  \\
 V    V    V
`
  ],
  eating: [
    `
  /^\\___/^\\
 /  o   o  \\
 V  🍎 V  V
`,
    `
  /^\\___/^\\
 /  -   -  \\
 V  🍎 V  V
`
  ],
  playing_ball: [
    `
  /^\\___/^\\
 /  o   o  \\
 V  ⚽ V  V
`,
    `
  /^\\___/^\\
 /  -   -  \\
 V  ⚽ V  V
`
  ],
  playing_chase: [
    `
  /^\\___/^\\
 /  o   o  \\
 V  🏃 V  V
`,
    `
  /^\\___/^\\
 /  -   -  \\
 V  🏃 V  V
`
  ],
  playing_puzzle: [
    `
  /^\\___/^\\
 /  o   o  \\
 V  🧩 V  V
`,
    `
  /^\\___/^\\
 /  -   -  \\
 V  🧩 V  V
`
  ],
  bath: [
    `
  /^\\___/^\\
 /  o   o  \\
 V    V    V
   \\___/ oo
`,
    `
  /^\\___/^\\
 /  -   -  \\
 V    V    V
   \\___/ oo
`
  ],
  sleeping: [
    `
  /^\\___/^\\
 /  -   -  \\
 V    V    V
`,
    `
  /^\\___/^\\
 /  -   -  \\
 V    V    V
`
  ],
  sick: [
    `
  /^\\___/^\\
 /  x   x  \\
 V    V    V
`,
    `
  /^\\___/^\\
 /  x   x  \\
 V    V    V
`
  ]
};

// Dragon animations
export const dragonAnimations = {
  idle: [
    `
       /\\ _
      ((  ))
       \\//
      _//\\
`,
    `
       /\\ _
      ((  ))
       \\//
      _//\\
`
  ],
  eating: [
    `
       /\\ _
      ((  ))
       \\//🍎
      _//\\
`,
    `
       /\\ _
      ((  ))
       \\//🍎
      _//\\
`
  ],
  playing_ball: [
    `
       /\\ _
      ((  ))
       \\//
      _//\\⚽
`,
    `
       /\\ _
      ((  ))
       \\//
      _//\\⚽
`
  ],
  playing_chase: [
    `
       /\\ _
      ((  ))
       \\//
      _//\\🏃
`,
    `
       /\\ _
      ((  ))
       \\//
      _//\\🏃
`
  ],
  playing_puzzle: [
    `
       /\\ _
      ((  ))
       \\//
      _//\\🧩
`,
    `
       /\\ _
      ((  ))
       \\//
      _//\\🧩
`
  ],
  bath: [
    `
       /\\ _
      ((  ))
       \\// o
      _//\\ oo
`,
    `
       /\\ _
      ((  ))
       \\// o
      _//\\ oo
`
  ],
  sleeping: [
    `
       /\\ _
      ((-.-))
       \\//
      _//\\
`,
    `
       /\\ _
      ((-.-))
       \\//
      _//\\
`
  ],
  sick: [
    `
       /\\ _
      ((x.x))
       \\//
      _//\\
`,
    `
       /\\ _
      ((x.x))
       \\//
      _//\\
`
  ]
};

// Chicken animations
export const chickenAnimations = {
  idle: [
    `
    \\
    (o>
   /)\\
   \\|||
`,
    `
    \\
    (o>
   /)\\
   \\|||
`
  ],
  eating: [
    `
    \\
    (o>
   /)\\ 🌽
   \\|||
`,
    `
    \\
    (o>
   /)\\ 🌽
   \\|||
`
  ],
  playing_ball: [
    `
    \\
    (o>
   /)\\ ⚽
   \\|||
`,
    `
    \\
    (o>
   /)\\ ⚽
   \\|||
`
  ],
  playing_chase: [
    `
    \\
    (o>
   /)\\ 🏃
   \\|||
`,
    `
    \\
    (o>
   /)\\ 🏃
   \\|||
`
  ],
  playing_puzzle: [
    `
    \\
    (o>
   /)\\ 🧩
   \\|||
`,
    `
    \\
    (o>
   /)\\ 🧩
   \\|||
`
  ],
  bath: [
    `
    \\
    (o>
   /)\\ o
   \\||| oo
`,
    `
    \\
    (o>
   /)\\ o
   \\||| oo
`
  ],
  sleeping: [
    `
    \\
    (->
   /)\\
   \\|||
`,
    `
    \\
    (->
   /)\\
   \\|||
`
  ],
  sick: [
    `
    \\
    (x>
   /)\\
   \\|||
`,
    `
    \\
    (x>
   /)\\
   \\|||
`
  ]
};

// Helper function to get animation for a specific pet type and action
export function getAnimation(petType, action) {
  let animations;
  
  switch (petType) {
    case 'cat':
      animations = catAnimations;
      break;
    case 'dog':
      animations = dogAnimations;
      break;
    case 'dragon':
      animations = dragonAnimations;
      break;
    case 'chicken':
      animations = chickenAnimations;
      break;
    default:
      animations = catAnimations;
  }
  
  // Get the specific animation frames for the action
  const frames = animations[action] || animations.idle;
  
  // Return a random frame from the animation
  const randomIndex = Math.floor(Math.random() * frames.length);
  return frames[randomIndex];
}
