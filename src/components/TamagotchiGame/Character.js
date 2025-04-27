import React, {useState, useEffect} from 'react';
import Zoom from '@mui/material/Zoom';
import Box from '@mui/material/Box';

export default function Character(props) {
  // Calculate parallax offset (move image up slightly as user scrolls down)
  // Adjust the divisor (e.g., 5) to change the parallax speed
  const parallaxOffset = props.scrollY ? -props.scrollY / 5 : 0; 

  useEffect(() => {
    //Preloading character assets
    const imageList = [props.petImage, props.actionImage]
    imageList.forEach((image) => {
        new Image().src = image
    });
  }, [props.petImage, props.actionImage]);

  // Determine the image source directly from props
  const imageSource = props.actionImage ? props.actionImage : props.petImage;

  // Apply grayscale filter if the pet is sick
  const imageStyle = {
    filter: props.isSick ? 'grayscale(100%)' : 'none',
    transition: 'filter 0.5s ease-in-out', // Smooth transition for sickness
    transform: `translateY(${parallaxOffset}px)`, // Apply parallax effect
    maxWidth: '100%', // Ensure image scales down if needed
    height: 'auto' // Maintain aspect ratio
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      {/* Use imageSource for the src attribute */}
      {imageSource && (
        <Zoom in={!!imageSource}>
          <img 
            src={imageSource} 
            alt={props.name}
            style={imageStyle} 
          />
        </Zoom>
      )}
    </Box>
  );
}
