// Import animations from the mcpet animations file
// This file serves as a bridge to the actual animations used in the mcpet system

// Pet type definitions
export const PET_TYPES = ["cat", "dog", "dragon", "chicken"];

// Animation types
export const ACTION_TYPES = [
  "idle",
  "eating",
  "snack",
  "feast",
  "bath",
  "playing_ball",
  "playing_chase",
  "playing_puzzle",
  "sleeping",
  "sick"
];

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
   `
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
  snack: [
    `
  /^\\___/^\\
 /  o   o  \\
 V  🍪 V  V
`,
    `
  /^\\___/^\\
 /  -   -  \\
 V  🍪 V  V
`
  ],
  feast: [
    `
  /^\\___/^\\
 /  o   o  \\
 V  🍗 V  V
`,
    `
  /^\\___/^\\
 /  -   -  \\
 V  🍗 V  V
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
  snack: [
    `
       /\\ _
      ((  ))
       \\//🍪
      _//\\
`,
    `
       /\\ _
      ((  ))
       \\//🍪
      _//\\
`
  ],
  feast: [
    `
       /\\ _
      ((  ))
       \\//🍗
      _//\\
`,
    `
       /\\ _
      ((  ))
       \\//🍗
      _//\\
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
  snack: [
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
  feast: [
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
