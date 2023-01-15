const express = require('express');
const checkAuth = require('../utils/checkAuth');
const CartModel = require('../models/Cart');

const router = express.Router({ mergeParams: true });

router.post('/', async (req, res) => {
  try {
    const doc = new CartModel({
      _id: req.body._id,
      image: req.body.image,
      name: req.body.name,
      model: req.body.model,
      memory: req.body.memory,
      color: req.body.color,
      currency: req.body.currency,
      price: req.body.price,
    });

    const cartItem = await doc.save();
    res.json(cartItem);
  } catch (error) {
    res.status(500).json({
      message: 'Не удалось добавить в корзину',
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const carts = await CartModel.find();

    res.json(carts);
  } catch (error) {
    res.status(500).json({
      message: 'Не удалось получить данные с корзины',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const carts = await CartModel.findByIdAndDelete(req.params.id)
    res.status(200).json(carts)
  } catch (error) {
    res.status(500).json({
      message: 'Не удалось удалить корзину',
    });
  }
});

module.exports = router;
