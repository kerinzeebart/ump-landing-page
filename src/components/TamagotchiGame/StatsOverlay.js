import React from 'react';
import { Box, Typography, Paper, LinearProgress } from '@mui/material';

// Helper for progress bar label (can be extracted if used elsewhere)
function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35, textAlign: 'right' }}>
        <Typography variant="caption" color="text.secondary">{`${Math.round(props.value)}`}</Typography>
      </Box>
    </Box>
  );
}

export default function StatsOverlay({ health, hunger, happiness, age }) {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 15px',
        borderRadius: '12px',
        zIndex: 1000,
        minWidth: '120px',
        backgroundColor: 'var(--dark-secondary)', 
        color: 'var(--text-primary)', 
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.4)' 
      }}
    >
      <Typography variant="caption" component="div" sx={{ fontWeight: 'bold', mb: 0.5, color: 'var(--secondary-color)' }}>Pet Stats</Typography>
      <Typography variant="caption" component="p" sx={{ lineHeight: 1.2, mb: 0.5, color: 'var(--text-secondary)' }}>Age {age !== undefined ? age.toFixed(1) + ' years' : '...'}</Typography>
      <Box sx={{ width: '100%' }}>
        <Typography variant="caption" component="p" sx={{ lineHeight: 1.2, color: 'var(--text-secondary)' }}>Health</Typography>
        <LinearProgressWithLabel value={health} color="error" sx={{ height: 6, borderRadius: 3 }} />
      </Box>
      <Box sx={{ width: '100%', mt: 0.5 }}>
        <Typography variant="caption" component="p" sx={{ lineHeight: 1.2, color: 'var(--text-secondary)' }}>Hunger</Typography>
        <LinearProgressWithLabel value={hunger} color="primary" sx={{ height: 6, borderRadius: 3 }} />
      </Box>
      <Box sx={{ width: '100%', mt: 0.5 }}>
        <Typography variant="caption" component="p" sx={{ lineHeight: 1.2, color: 'var(--text-secondary)' }}>Happiness</Typography>
        <LinearProgressWithLabel value={happiness} color="success" sx={{ height: 6, borderRadius: 3 }} />
      </Box>
    </Paper>
  );
}
