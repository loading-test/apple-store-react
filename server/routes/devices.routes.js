const express = require('express')
const Device = require('../models/Device')

const router = express.Router({mergeParams: true})

router.get('/', async(req, res) => {
  try {
    const device = await Device.find()
    res.status(200).send(device)
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Повторите позже...'
    })
  }
})

module.exports = router