const express = require('express')

const router = express.Router({mergeParams: true})

router.use('/auth', require('./auth.routes'))
router.use('/comment', require('./comment.routes'))
router.use('/user', require('./user.routes'))
router.use('/devices', require('./devices.routes'))
router.use('/devices/:id', require('./devices.routes'))
router.use('/cart', require('./cart.routes'))

module.exports = router