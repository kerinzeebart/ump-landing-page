import React from 'react';
import { Box, Typography, Paper, LinearProgress, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Helper for progress bar label (can be extracted if used elsewhere)
function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  );
}

export default function StatsOverlay({ stats, onClose, sx }) {
  // Original simpler check: If stats is null or undefined, don't render
  if (!stats) {
    console.warn('StatsOverlay received falsy stats prop:', stats);
    return null;
  }
  
  const { health, hunger, happiness, age } = stats; 

  // Format age here now that raw age is passed
  const displayAge = (typeof age === 'number') ? `${age.toFixed(1)} years` : '...';

  return (
    <Paper 
      elevation={3} 
      sx={{
        position: 'fixed', // Fix position relative to viewport
        bottom: 16,       // Distance from bottom
        right: 16,        // Distance from right
        zIndex: 1000,      // Ensure it's above other content
        p: 2,             // Slightly more padding
        minWidth: '150px', 
        maxWidth: '200px',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(34, 84, 34, 0.9)', // Dark green semi-transparent background
        border: '2px solid #50C878',            // Emerald green border
        borderRadius: '15px',                   // More rounded corners
        boxShadow: '0px 0px 10px rgba(80, 200, 120, 0.5)', // Subtle green glow
        color: '#98FB98',                      // Pale green text color
        ...sx 
      }}
    >
      {/* Close Button */}
      <IconButton 
        aria-label="close stats" 
        onClick={onClose} 
        sx={{
          position: 'absolute', 
          top: 4, 
          left: 4, 
          color: '#98FB98', // Match text color
          '&:hover': {
            backgroundColor: 'rgba(80, 200, 120, 0.2)' // Greenish hover
          }
        }}
      >
        <CloseIcon fontSize="small" /> 
      </IconButton>

      <Typography variant="caption" component="div" sx={{ fontWeight: 'bold', color: '#98FB98', alignSelf: 'center', mb: 0.5, mt: 2 }}> 
        Pet Stats
      </Typography>
      <Typography variant="caption" component="p" sx={{ lineHeight: 1.2, mb: 0.5, color: '#98FB98', alignSelf: 'center' }}>Age {displayAge}</Typography>
      
      <Box sx={{ width: '100%', mt: 1 }}> 
        <Typography variant="caption" component="p" sx={{ lineHeight: 1.2, color: '#98FB98' }}>Health</Typography>
        <LinearProgress
          variant="determinate"
          value={health}
          color="error" // Use theme's error color (red)
          sx={{ height: 8, borderRadius: 4 }}
        />
      </Box>
      <Box sx={{ width: '100%', mt: 0.5 }}>
        <Typography variant="caption" component="p" sx={{ lineHeight: 1.2, color: '#98FB98' }}>Hunger</Typography>
        <LinearProgress
          variant="determinate"
          value={hunger}
          color="primary" // Use theme's primary color (blue)
          sx={{ height: 8, borderRadius: 4 }}
        />
      </Box>
      <Box sx={{ width: '100%', mt: 0.5 }}>
        <Typography variant="caption" component="p" sx={{ lineHeight: 1.2, color: '#98FB98' }}>Happiness</Typography>
        <LinearProgress
          variant="determinate"
          value={happiness}
          color="success" // Use theme's success color (green)
          sx={{ height: 8, borderRadius: 4 }}
        />
      </Box>
    </Paper>
  );
}
