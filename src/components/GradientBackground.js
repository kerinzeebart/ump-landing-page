import React, { useEffect, useRef, useState } from "react";

const GradientBackground = () => {
  const interactiveRef = useRef(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setCurX((prev) => prev + (tgX - prev) / 20);
      setCurY((prev) => prev + (tgY - prev) / 20);

      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
    }, 1000 / 60);

    return () => clearInterval(moveInterval);
  }, [curX, curY, tgX, tgY]);

  const handleMouseMove = (event) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  // Adding keyframes for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes first {
        0% { transform: translate(0%, 0%) rotate(0deg); }
        100% { transform: translate(30%, 30%) rotate(360deg); }
      }
      @keyframes second {
        0% { transform: translate(0%, 0%) rotate(0deg); }
        100% { transform: translate(-25%, 25%) rotate(-360deg); }
      }
      @keyframes third {
        0% { transform: translate(0%, 0%) rotate(0deg); }
        100% { transform: translate(-30%, -30%) rotate(360deg); }
      }
      @keyframes fourth {
        0% { transform: translate(0%, 0%) rotate(0deg); }
        100% { transform: translate(35%, -25%) rotate(-360deg); }
      }
      @keyframes fifth {
        0% { transform: translate(0%, 0%) rotate(0deg); }
        100% { transform: translate(-25%, 25%) rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={{ 
      height: '100%', 
      width: '100%', 
      position: 'absolute',
      overflow: 'hidden',
      background: 'linear-gradient(40deg, #e63946, #1d3557)',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      opacity: 1
    }}>
      <svg style={{ display: 'none' }}>
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div
        style={{ 
          height: '100%', 
          width: '100%', 
          filter: isSafari ? 'blur(20px)' : 'blur(40px)',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          background: 'radial-gradient(circle at center, rgba(230,57,70,0.8) 0, rgba(230,57,70,0) 50%) no-repeat',
          mixBlendMode: 'screen',
          width: '80%',
          height: '80%',
          top: 'calc(50% - 40%)',
          left: 'calc(50% - 40%)',
          transformOrigin: 'center center',
          animation: 'first 20s linear infinite',
          opacity: 1
        }} />
        <div style={{
          position: 'absolute',
          background: 'radial-gradient(circle at center, rgba(244,162,97,0.8) 0, rgba(244,162,97,0) 50%) no-repeat',
          mixBlendMode: 'screen',
          width: '80%',
          height: '80%',
          top: 'calc(50% - 40%)',
          left: 'calc(50% - 40%)',
          transformOrigin: 'calc(50% - 400px)',
          animation: 'second 25s linear infinite',
          opacity: 1
        }} />
        <div style={{
          position: 'absolute',
          background: 'radial-gradient(circle at center, rgba(69,123,157,0.8) 0, rgba(69,123,157,0) 50%) no-repeat',
          mixBlendMode: 'screen',
          width: '80%',
          height: '80%',
          top: 'calc(50% - 40%)',
          left: 'calc(50% - 40%)',
          transformOrigin: 'calc(50% + 400px)',
          animation: 'third 30s linear infinite',
          opacity: 1
        }} />
        <div style={{
          position: 'absolute',
          background: 'radial-gradient(circle at center, rgba(200,50,50,0.8) 0, rgba(200,50,50,0) 50%) no-repeat',
          mixBlendMode: 'hard-light',
          width: '80%',
          height: '80%',
          top: 'calc(50% - 40%)',
          left: 'calc(50% - 40%)',
          transformOrigin: 'calc(50% - 200px)',
          animation: 'fourth 40s linear infinite',
          opacity: 0.7
        }} />
        <div style={{
          position: 'absolute',
          background: 'radial-gradient(circle at center, rgba(180,180,50,0.8) 0, rgba(180,180,50,0) 50%) no-repeat',
          mixBlendMode: 'hard-light',
          width: '80%',
          height: '80%',
          top: 'calc(50% - 40%)',
          left: 'calc(50% - 40%)',
          transformOrigin: 'calc(50% - 800px) calc(50% + 800px)',
          animation: 'fifth 35s linear infinite',
          opacity: 1
        }} />

        <div
          ref={interactiveRef}
          onMouseMove={handleMouseMove}
          style={{
            position: 'absolute',
            background: 'radial-gradient(circle at center, rgba(140,100,255,0.8) 0, rgba(140,100,255,0) 50%) no-repeat',
            mixBlendMode: 'hard-light',
            width: '100%',
            height: '100%',
            top: '-50%',
            left: '-50%',
            opacity: 0.7
          }}
        />
      </div>
    </div>
  );
};

export default GradientBackground;
