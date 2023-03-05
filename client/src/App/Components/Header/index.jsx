import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { fetchCart } from '../../Redux/cart/slice';
import { Button } from '@mui/material';
import { selectIsAuth, logout } from '../../Redux/auth/slice';

const Header = () => {
  const { itemsCart } = useSelector(selectCart);
  const isAuth = useSelector(selectIsAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 18,
      top: 13,
      padding: '0 4px',
    },
  }));

  const onClickLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem('token');
  };

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
                {isAuth ? (
                  <>
                    <Button onClick={onClickLogout} variant="contained" color="error">
                      Выйти
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/registration">Регистрация</Link>
                    <Link to="/login">Войти</Link>
                  </>
                )}
              </div>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
