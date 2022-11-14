const express = require('express');
const Device = require('../models/Device');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  try {
    let { page, size } = req.query;
    if (!page) {
      page = 1;
    }
    if (!size) {
      size = 8;
    }

    const limit = parseInt(size);
    const skip = (page - 1) * size;

    let filter = {};

    if (req.query.category) {
      filter = { category: req.query.category };
    }

    const filterDeviceList = await Device.find(filter)
      .sort('-price')
      .limit(limit)
      .skip(skip)
      .populate('category');
    // const sortDeviceList = await Device.find(sortBy).populate('price')

    res.status(200).send({page, size, filterDeviceList});
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
    const device = await Device.findById(req.params.id);
    res.status(200).json(device);
  } catch (err) {
    res.status(500).json({
      message: 'Не удалось получить данные об устройстве',
    });
  }
});

module.exports = router;
