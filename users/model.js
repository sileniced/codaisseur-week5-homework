const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('users', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = User