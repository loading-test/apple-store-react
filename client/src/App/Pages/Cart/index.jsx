import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import styles from './Cart.module.scss';
import { selectCart } from '../../Redux/cart/selectors';
import { Container } from '@mui/material';
import { clearItems, fetchCart } from '../../Redux/cart/slice';
import CartItemBlock from '../../Components/CartItemBlock';

const Cart = () => {
  const dispatch = useDispatch();
  const { itemsCart, totalPrice } = useSelector(selectCart);

  const priceCart = itemsCart.map((item) => item.price + '');
  console.log(priceCart);

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  const onClickClear = () => {
    dispatch(clearItems());
  };

  return (
    <Container maxWidth="xl">
      <div className={styles.cart}>
        <div className={styles.cartTop}>
          <h2 className={styles.cartTitle}>
            <ShoppingCartOutlinedIcon />
            Корзина
          </h2>
          <div className={styles.cartClear} onClick={onClickClear}>
            <DeleteOutlinedIcon />
            <span>Очистить корзину</span>
          </div>
        </div>
      </div>
      <div className={styles.cartItem}>
        {itemsCart.map((item) => (
          <CartItemBlock key={item._id} {...item} />
        ))}
      </div>
      <div className={styles.cartBottom}>
        <span className={styles.totalProduct}>
          Всего товаров: <b>{itemsCart.length}</b>
        </span>
        <span className={styles.totalPrice}>
          Сумма заказа: <b>{totalPrice}</b>
        </span>
      </div>
    </Container>
  );
};

export default Cart;
