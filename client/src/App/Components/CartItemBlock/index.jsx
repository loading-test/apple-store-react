import React from 'react';
import styles from './CartItemBlock.module.scss';

const CartItemBlock = ({ _id, image, name, model, memory, color, price, currency }) => {
  return (
    <div className={styles.cartItemBlock}>
      <img src={image} alt="apple" />
      <p>{name}</p>
      <p>{model}</p>
      <p>{color}</p>
      <p>{memory}</p>
      <hr />
      <p>
        {price} {currency}
      </p>
    </div>
  );
};

export default CartItemBlock;
