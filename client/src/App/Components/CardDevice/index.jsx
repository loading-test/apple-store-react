import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CardDevice.scss';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../Redux/cart/slice';

const CardDevice = ({ _id, image, name, model, memory, color, price, currency }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.itemsCart.find((obj) => obj._id === _id));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickCartAdd = async () => {
    const item = {
      _id,
      image,
      name,
      model,
      memory,
      color,
      price,
      currency,
      count: 0,
    };
    dispatch(addItem(item));
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 97,
      top: 13,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (
    <Grid className="gridItem">
      <Card sx={{ maxWidth: 400, pt: 1 }} className="cardBlock">
        <Link to={`/${_id}`}>
          <CardActionArea className="cardAction">
            <CardMedia
              component="img"
              height="200"
              width="200"
              image={image}
              alt="image"
              className="cardImage"
            />
            <CardContent className="cardContent">
              <Typography gutterBottom className="typograph" component="div">
                {name} {model}
              </Typography>
              <div className="infoBlock">
                <Typography variant="body2" color="text.secondary">
                  {color}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {memory}
                </Typography>
              </div>
              <Typography variant="h6" color="text.info" className="price">
                {price.toLocaleString('ru-RU')} {currency}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions className="cartActions">
          <Button size="small" color="inherit" onClick={onClickCartAdd}>
            <StyledBadge badgeContent={addedCount} color="primary" alignitems="center">
              <AddShoppingCartIcon /> В корзину
            </StyledBadge>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardDevice;
