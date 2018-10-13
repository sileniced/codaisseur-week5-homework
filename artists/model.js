const Sequelize = require('sequelize')
const sequelize = require('../db')

const Artist = sequelize.define('artists', {
  name: {
    type: Sequelize.STRING
  },

})

module.exports = Artist