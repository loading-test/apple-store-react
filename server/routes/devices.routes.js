const express = require('express');
const Device = require('../models/Device');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  try {
    const device = await Device.find();
    res.status(200).send(device);
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
      message: 'не удалось получить данные об устройстве'
     });
    }
});

module.exports = router;
