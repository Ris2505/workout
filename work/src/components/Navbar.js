import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/fitofy.png';

const Navbar = () => (
  <Stack direction="row" position="fixed" width={"100%"} zIndex={200} height={"60px"} justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, justifyContent: 'none' }} px="20px" bgcolor={"black"}>
    <Link to="https://ris2505.github.io/Fitofy_ris.github.io/index.html">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      
     
      
      fontFamily=" Arial, Helvetica, sans-serif"
      fontSize="15px"
      display='inline'
      ml='500px'
      float='left'
      
      
    >
      
      <Link to="https://ris2505.github.io/Fitofy_ris.github.io/index.html" style={{ textDecoration: 'none', color: 'white' ,float:"left",margin:'20px 20px 20px 20px'}}>HOME</Link>
      <a href="https://ris2505.github.io/caloriemeter.github.io/" style={{ textDecoration: 'none', color: 'white' ,float:'left',margin:'20px 20px 20px 20px'}}>CALORIMETER</a>
      <a href="/" style={{ textDecoration: 'none', color: 'white',float:"left",margin:'20px 20px 20px 20px' }}>WORKOUT</a>
      <a href="https://ris2505.github.io/yogapage.github.io/" style={{ textDecoration: 'none', color: 'white',float:"left",margin:'20px 20px 20px 20px'}}>YOGA</a>
      <a href="https://ris2505.github.io/rishabhjain.github.io/#" style={{ textDecoration: 'none', color: 'white',float:"left",margin:'20px 20px 20px 20px'}}>CONTACT</a>
      
    </Stack>
  </Stack>
);

export default Navbar;
