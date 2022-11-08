const express = require('express');
const Device = require('../models/Device');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  try {
    let filter = {}
    // let sortBy = {}
    if(req.query.category) {
      filter = {category: req.query.category}
    }
    // if(req.query.price) {
    //   sortBy = {price: req.query.price}
    // }
    const filterDeviceList = await Device.find(filter).sort('-price').populate('category')
    // const sortDeviceList = await Device.find(sortBy).populate('price')
    
    res.status(200).json(filterDeviceList)
    // const device = await Device.find();
    // res.status(200).send(device);
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Повторите позже...',
    });
  }
});

router.get('/:id', async (req, res) => {
    try {
      const device = await Device.findById(req.params.id)
      res.status(200).json(device)
    } catch (err) {
     res.status(500).json({
      message: 'Не удалось получить данные об устройстве'
     });
    }
});

module.exports = router;
