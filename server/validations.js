const {body} = require('express-validator')

exports.registerValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'пароль должен содержать минимум 6 символов').isLength({min: 6}),
    body('firstName', 'Заполните имя').notEmpty(),
    body('lastName', 'Заполните фамилию').notEmpty(),
    body('avatarUrl', 'Неверная ссылка на аватарку').optional().isURL(),
    body('sex', 'Выберите пол').notEmpty(),
]

exports.loginValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('passwprd', 'Пароль должен быть минимум 6 символов').isLength({min: 6})
]