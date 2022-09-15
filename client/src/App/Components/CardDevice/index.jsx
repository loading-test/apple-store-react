import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { useEffect } from 'react';
import { fetchDevice } from '../../Redux/slice/device';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CardDevice.scss';
import Sort from '../Sort';
import Search from '../Search/Search';

const CardDevice = () => {
  const dispatch = useDispatch();
  const { devices } = useSelector((state) => state.devices);
  const [value, setValue] = useState('');

  useEffect(() => {
    dispatch(fetchDevice());
  }, []);

  const device = devices.items

  return (
    <div className="cardDevice-Main">
      <div className="filterBlock">
        <Search value={value} setValue={setValue} />
        <Sort />
      </div>
      <Grid container spacing={1} className="gridContainer">
        {device.filter((obj) => {
          const search = (obj.name + ' ' + obj.model).toLowerCase()
          return search.includes(value.toLowerCase())
        }).map((item) => {
          return (
            <Grid key={item._id} className="gridItem">
              <Card sx={{ maxWidth: 400 }} className="cardBlock">
                <CardActionArea className="cardAction">
                  <CardMedia
                    component="img"
                    height="200"
                    width="200"
                    image={item.image}
                    alt="image"
                    className="cardImage"
                  />
                  <CardContent className="cardContent">
                    <Typography gutterBottom className="typograph" component="div">
                      {item.name} {item.model}
                    </Typography>
                    <div className="infoBlock">
                      <Typography variant="body2" color="text.secondary">
                        {item.color}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.memory}
                      </Typography>
                    </div>
                    <Typography variant="h6" color="text.info" className="price">
                      {item.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className="cartActions">
                  <Button size="small" color="primary">
                    <AddShoppingCartIcon />В корзину
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default CardDevice;
