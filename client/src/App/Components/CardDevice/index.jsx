import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CardDevice.scss';

const CardDevice = ({ item }) => {
  return (
    <Grid key={item._id} className="gridItem">
      <Card sx={{ maxWidth: 400, pt: 1 }} className="cardBlock">
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
              {item.price.toLocaleString('ru-RU')} {item.currency}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="cartActions">
          <Button size="small" color="inherit">
            <AddShoppingCartIcon />В корзину
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardDevice;
