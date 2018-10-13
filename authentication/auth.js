const User = require('../users/model')
const { toData } = require('./jwt')

const authenticationFailedStr = 'authentication failed or you are not authorized'

const auth = (req, res, next) => {
  const auth = req.headers.authorization && req.headers.authorization.split(' ')
  if (!auth || auth[0] !== 'Bearer' || !auth[1]) return res.status(404).send({
    message: authenticationFailedStr
  })
  try {
    const data = toData(auth[1])
    User
    .findById(data.userId)
    .then(user => {
      if (!user) return next(authenticationFailedStr)
      req.user = user
      next()
    })
  } catch (error) {
    res.status(400).send({
      message: `Error ${error.name}: ${error.message}`
    })
  }
}

module.exports = auth