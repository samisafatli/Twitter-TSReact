import React  from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Profile } from '@styled-icons/remix-line/Profile';


const MenuBar = () => {
  return (
    <Container>
      <Link to='/profile' style={{ textDecoration: "none", color: "black"}}>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>Profile</Typography>
          <Profile size={20}/>
        </Link>
    </Container>
  );
}

export default MenuBar;