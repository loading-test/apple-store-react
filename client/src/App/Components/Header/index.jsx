import React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.scss';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { selectCart } from '../../Redux/cart/selectors';

const Header = () => {
  const { itemsCart, totalPrice } = useSelector(selectCart);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 18,
      top: 13,
      // border: `1px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="header__appbar">
        <Container maxWidth="xl">
          <Toolbar className="header__appbar__toolbar">
            <Link to="/">
              <img src="apple.svg" alt="apple.svg" />
            </Link>
            <div className="header__appbar__toolbar__layout">
              <Link to="/cart">
                <StyledBadge badgeContent={itemsCart.length} color="primary">
                  <ShoppingCartIcon />
                </StyledBadge>
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
