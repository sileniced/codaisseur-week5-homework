const Sequelize = require('sequelize')
const sequelize = require('../db')

// const Artist = require('../artists/model')
const Playlist = require('../playlists/model')

const Song = sequelize.define('songs', {
  name: Sequelize.STRING,
  album: Sequelize.STRING,
  artist: Sequelize.STRING,
  playlistId: {
    type: Sequelize.INTEGER,
    field: 'playlist_id'
  },
  // artistId: {
  //   type: Sequelize.INTEGER,
  //   field: 'artist_id',
  //   references: {
  //     model: Artist,
  //     key: 'id'
  //   }
  // },
}, {
  timestamps: false,
  tableName: 'songs'
})

Song.belongsTo(Playlist)

module.exports = Song