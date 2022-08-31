const express = require('express')
const checkAuth = require('../utils/checkAuth')
const CommentModel = require('../models/Comment')
const Comment = require('../models/Comment')

const router = express.Router({mergeParams: true})

router.post('/', checkAuth, async (req, res) => {
  try {
    const doc = new CommentModel({
      text: req.body.text,
      user: req.userId
    })
    const comment = await doc.save()
    res.json(comment)
  } catch (error) {
    res.status(500).json({
      message: 'Не удалось создать коммент'
    })
  }
})

router.get('/', checkAuth, async (req, res) => {
  try {
    const {orderBy, equalTo} = req.query
      const list = await Comment.find({ [orderBy]: equalTo })
      res.send(list)
  } catch (error) {
    res.status(500).json({
      message: 'Не удалось получить коммент'
    })
  }
})

router.delete('/:commentId', checkAuth, async (req, res) => {
  try {
    const {commentId} = req.params
    const removedComment = await Comment.findById(commentId)

    if(removedComment.userId.toString() === req.user._id) {
      await removedComment.remove()
      return res.send(null)
    } else {
      res.status(401).json({message: 'Unauthorized'})
    }
  } catch (error) {
    res.status(500).json({
      message: 'Не удалось удалить коммент'
    })
  }
})

module.exports = router