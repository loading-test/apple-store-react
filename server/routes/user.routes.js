const express = require('express')
const User = require('../models/User')
const checkAuth = require('../utils/checkAuth')
const router = express.Router({mergeParams: true})

router.patch('/:userId', checkAuth, async (req, res) => {
  try {
    const { userId } = req.params

    if (userId === req.user._id) {
      const updatedUser = await User.findByIdAndUpdate(userId, req.body, {new: true})
      res.send(updatedUser)
    } else {
      res.status(401).json({message: 'Unauthorized'})
    }
  } catch (e) {
    res.status(500).json({
      message: 'Не возможно обновить пользователя. Попробуйте позже'
    })
  }
})

router.get('/', checkAuth, async (req, res) => {
  try {
    const list = await User.find()
    res.send(list)
  } catch (e) {
    res.status(500).json({
      message: 'Пользователь не получен. Попробуйте позже'
    })
  }
})

module.exports = router