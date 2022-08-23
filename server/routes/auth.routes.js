const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const tokenServece = require('../services/token.service');

const router = express.Router({ mergeParams: true });

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const exitingUser = await User.findOne({ email });

    if (exitingUser) {
      return res.status(400).json({
        error: {
          message: 'EMAIL_EXISTS',
          code: 400,
        },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    const tokens = tokenServece.generate({ _id: newUser._id });
    await tokenServece.save(newUser._id, tokens.refreshToken);
    res.status(201).send({ ...tokens, userId: newUser._id });
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произола ошибка. Попробуйте позже',
    });
  }
});
router.post('/login', async (req, res) => {});
router.post('/token', async (req, res) => {});

module.exports = router;
