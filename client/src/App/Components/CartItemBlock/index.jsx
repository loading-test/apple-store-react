import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchRemoveItem } from '../../Redux/cart/slice';
import styles from './CartItemBlock.module.scss';

const CartItemBlock = ({ _id, image, name, model, memory, color, price, currency }) => {
  const dispatch = useDispatch();

  const onClickRemove = () => {
    dispatch(fetchRemoveItem(_id));
  };
  return (
    <div className={styles.cartItemBlock}>
      <div className={styles.cartInfo}>
        <img src={image} alt="apple" />
        <p>{name}</p>
        <p>{model}</p>
        <p>{color}</p>
        <p>{memory}</p>
      </div>

      {/* <hr /> */}
      <div className={styles.numberBlock}>
        <img src="minus.svg" alt="minus" />
        <img src="plus.svg" alt="minus" />
      </div>
      <p>
        {price} {currency}
      </p>
      <div className={styles.blockCloseIcon}>
        <img className={styles.closeIcon} onClick={onClickRemove} src="close.png" alt="close" />
      </div>
    </div>
  );
};

export default CartItemBlock;
