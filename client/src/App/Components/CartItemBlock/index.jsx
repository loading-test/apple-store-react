import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, fetchRemoveItem, minusItem } from '../../Redux/cart/slice';
import styles from './CartItemBlock.module.scss';

const CartItemBlock = ({ _id, image, name, model, memory, color, price, currency }) => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.itemsCart.find((obj) => obj._id === _id));

  const onClickRemove = () => {
    dispatch(fetchRemoveItem(_id));
  };

  const onClickPlus = () => {
    dispatch(addItem({ _id }));
  };
  const onClickMinus = () => {
    dispatch(minusItem(_id));
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
        {items.count === 0 ? true : <img src="minus.svg" alt="minus" onClick={onClickMinus} />}
        <h3>{items.count + 1}</h3>
        <img src="plus.svg" alt="minus" onClick={onClickPlus} />
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
