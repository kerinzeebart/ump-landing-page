import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ children, onClick, disabled, className = '', ...props }) => {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.08, boxShadow: '0 0 16px #ffe082', rotate: -2 }}
      whileTap={{ scale: 0.94, rotate: 2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      style={{ outline: 'none' }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
