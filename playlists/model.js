const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = require('../users/model')

const Playlist = sequelize.define('playlists', {
  name: {
    type: Sequelize.STRING
  },
  userID: {
    type: Sequelize.STRING,
    field: 'user_id',
    references: {
      model: User,
      key: 'id'
    }
  }
})

module.exports = Playlist