import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import './header.scss';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import BasicModal from '../common/Modal';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="header__appbar">
        <Container maxWidth="xl">
          <Toolbar className="header__appbar__toolbar">
            <img src="apple.svg" alt="apple.svg" />
            <div className="header__appbar__toolbar__link">
              <Link to="/iphonexr">Iphone XR</Link>
              <Link to="/iphone11">Iphone 11</Link>
              <Link to="/iphone12">Iphone 12</Link>
              <Link to="/iphone13">Iphone 13</Link>
            </div>
            <BasicModal />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
