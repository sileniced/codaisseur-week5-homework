const { toJWT } = require('./jwt')
const { compareSync } = require('bcrypt')
const { Router } = require('express')
const router = new Router()

const User = require('../users/model')

const combinationFailedStr = 'email / password combination is unknown'

router.post('/tokens', (req, res) => {
  const { email, password } = req.body
  if (!email || !password) return res.status(404).send({
    message: combinationFailedStr
  })
  User
  .findOne({ where: { email } })
  .then(user => {
    if (!user || !compareSync(password, user.password)) return res.status(404).send({
      message: combinationFailedStr
    })
    return res.send({
      jwt: toJWT({ userId: user.id })
    })
  })
})

module.exports = router