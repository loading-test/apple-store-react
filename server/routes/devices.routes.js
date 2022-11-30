const express = require('express');
const Device = require('../models/Device');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  try {
    let pageOptions = {
      page: req.query.page || 0,
      size: req.query.size || 10,
    };

    let totalPage = {};
    const count = await Device.countDocuments(totalPage);
    
    const limit = parseInt(pageOptions.size);
    const skip = (pageOptions.page - 1) * pageOptions.size;

    let filter = {};

    if (req.query.category) {
      filter = { category: req.query.category };
    }

    const filterDeviceList = await Device.find(filter)
      .sort('-price')
      .limit(limit)
      .skip(skip)
      .populate('category');

    res.status(200).json({devices: filterDeviceList, totalCount: count});
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
