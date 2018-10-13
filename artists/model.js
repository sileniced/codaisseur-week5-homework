const Sequelize = require('sequelize')
const sequelize = require('../db')

const Artist = sequelize.define('artists', {
  name: {
    type: Sequelize.STRING
  },
}, {
  timestamps: false,
  tableName: 'artists'
})

module.exports = Artist