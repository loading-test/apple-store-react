const {registerValidation} = require("../validations");
const express = require("express");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt")
const UserModel = require("../models/User")

const router = express.Router({ mergeParams: true });

router.post("/register", registerValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  const password = req.body.password
  const salt = await bcrypt.genSalt(10)
  const passwordHash = await bcrypt.hash(password, salt)

  const doc = new UserModel({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    avatarUrl: req.body.avatarUrl,
    sex: req.body.sex,
    password: passwordHash
  })

  const user = await doc.save()

  res.json(user);
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Повторите позже...'
    })
  }
  
});
router.post("/login", async (req, res) => {});
router.post("/token", async (req, res) => {});

module.exports = router;
