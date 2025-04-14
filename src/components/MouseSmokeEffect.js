import React, { useCallback, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Creates a smoke particle effect that follows the mouse cursor
 * @param {Object} props Component props
 * @param {string} [props.color="#e63946"] - Color of the smoke particles
 * @param {number} [props.particlesPerEmit=3] - Number of particles to emit per mouse movement
 * @returns {JSX.Element} Smoke effect component
 */
function SmokeEffect({
  color = "#e63946",
  particlesPerEmit = 3,
}) {
  const [particles, setParticles] = useState([]);

  const createParticle = useCallback(
    (x, y, id) => ({
      id,
      x,
      y,
      angle: Math.random() * Math.PI * 2, // Full 360-degree emission
      speed: Math.random() * 2 + 1.5,
      size: Math.random() * 15 + 10,
      opacity: Math.random() * 0.5 + 0.3, // More visible opacity
    }),
    [],
  );

  const emitParticles = useCallback(
    (x, y) => {
      const newParticles = Array.from({ length: particlesPerEmit }, (_, i) =>
        createParticle(x, y, Date.now() + i),
      );
      setParticles((prev) => [...prev, ...newParticles]);

      setTimeout(() => {
        setParticles((prev) =>
          prev.filter((p) => !newParticles.find((np) => np.id === p.id)),
        );
      }, 1000);
    },
    [createParticle, particlesPerEmit],
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    emitParticles(x, y);
  };

  // Use document-level mouse move event
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      emitParticles(x, y);
    };
    
    // Add throttling to prevent too many events
    let lastCall = 0;
    const throttledMouseMove = (e) => {
      const now = Date.now();
      if (now - lastCall >= 50) { // Only process every 50ms
        lastCall = now;
        handleGlobalMouseMove(e);
      }
    };
    
    document.addEventListener('mousemove', throttledMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', throttledMouseMove);
    };
  }, [emitParticles]);
  
  return (
    <div
      style={{ 
        width: '100%', 
        height: '100%', 
        position: 'fixed', 
        top: 0,
        left: 0,
        overflow: 'hidden',
        background: 'transparent',
        pointerEvents: 'none', // Allow interactions with elements below
        zIndex: 9999 // Ensure it's above everything
      }}
    >
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            style={{
              position: 'absolute',
              borderRadius: '50%',
              filter: 'blur(8px)',
              width: particle.size,
              height: particle.size,
              backgroundColor: color,
            }}
            initial={{
              x: particle.x,
              y: particle.y,
              scale: 1,
              opacity: particle.opacity,
            }}
            animate={{
              x: particle.x + Math.cos(particle.angle) * 200 * particle.speed,
              y: particle.y + Math.sin(particle.angle) * 200 * particle.speed,
              scale: 2,
              opacity: 0,
            }}
            exit={{ opacity: 0, scale: 3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

/**
 * Mouse smoke effect component that creates a smoke trail following the cursor
 * @returns {JSX.Element} MouseSmokeEffect component
 */
function MouseSmokeEffect() {
  return (
    <div 
      style={{ 
        width: '100vw', 
        height: '100vh', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        pointerEvents: 'none', // Allow interaction with elements underneath
        zIndex: 9999 // Ensure it's above everything
      }}
    >
      <SmokeEffect color="#e63946" particlesPerEmit={3} />
    </div>
  );
}

export default MouseSmokeEffect;
