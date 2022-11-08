import { Box, Button } from '@mui/material';
import React from 'react';
import './CardDeviceInfo.scss';

const CartDeviceIndo = ({ item }) => {
  const deviceInfo = ['Дисплей', 'Процессор', 'Технология дисплея', 'Разрешение видео'];

  return (
    <Box className="cardInfo">
      {item && (
        <>
          <div className="cardInfo__main">
            <div className="cardInfo__main__title">
              {item.name} {item.model} {item.memory} {item.color}
            </div>

            <img src={item.image} alt="image" />
          </div>
          <div className="cardInfo__description">
            <div className="cardInfo__description__textInfo">
              <h4>Характеристики:</h4>
              <li>Дисплей: {item.screen}</li>
              <li>Процессор: {item.processorType}</li>
              <li>Технология дисплея: {item.screenTechnology}</li>
              <li>Разрешение видео: {item.movieResolution}</li>
            </div>
            <div>
              <Button variant="contained">В корзину</Button>
            </div>
          </div>
        </>
      )}
    </Box>
  );
};

export default CartDeviceIndo;
