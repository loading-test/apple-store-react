import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.scss';
import Categories from '../Categories';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="header__appbar">
        <Container maxWidth="xl">
          <Toolbar className="header__appbar__toolbar">
            <Link to="/">
              <img src="apple.svg" alt="apple.svg" />
            </Link>

            <div className="header__appbar__toolbar__link">
              {/* <Link to="/iphonexr">Iphone XR</Link>
              <Link to="/iphone11">Iphone 11</Link>
              <Link to="/iphone12">Iphone 12</Link>
              <Link to="/iphone13">Iphone 13</Link> */}
              <Categories />
            </div>
            <div className="header__appbar__toolbar__layout">
              <Link to="/cart">
                <ShoppingCartIcon />
              </Link>
              <div className="header__appbar__toolbar__layout__login">
                <Link to="/registration">Регистрация</Link>
                <Link to="/login">Войти</Link>
              </div>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
