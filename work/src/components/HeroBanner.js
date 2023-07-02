import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/first.png';

const HeroBanner = () => (
  
  <Box  position="relative" p="10%" bgcolor={"black"}  >
    
    <Typography fontWeight={800} position="relative" sx={{ fontSize: { lg: '60px', xs: '40px' } ,ml: {lg: '100px', sm: '50px' }}} mb="15px" mt="50px" color={"white"}>
      Workout for <br />
      everyBODY
    </Typography>
   
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px',marginLeft:"10%", textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px'}}>Explore Exercises</a>
    </Stack>
    
    <img src={HeroBannerImage} alt="hero-banner" style={{position: "absolute",
    height:"90%",
    top:"10%",
    width:"80%",
    left:"20%",
    opacity:'0.8',
    mask: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"
     }}   />
  </Box>
  
);

export default HeroBanner;
