const Sequelize = require('sequelize')
const sequelize = require('../db')

const Artist = require('../artists/model')
const Playlist = require('../playlists/model')

const Song = sequelize.define('songs', {
  name: {
    type: Sequelize.STRING,
  },
  album: {
    type: Sequelize.STRING
  },
  artistID: {
    type: Sequelize.STRING,
    field: 'artist_id',
    references: {
      model: Artist,
      key: 'id'
    }
  },
  playlistID: {
    type: Sequelize.STRING,
    field: 'playlist_id',
    references: {
      model: Playlist,
      key: 'id'
    }
  }
})

module.exports = Song