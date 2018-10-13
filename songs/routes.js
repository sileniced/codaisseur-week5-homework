const { Router } = require('express')
const router = new Router()
const auth = require('../authentication/auth')

const Playlist = require('../playlists/model')
const Song = require('./model')

router.post('playlists/:id/songs', auth, (req, res, next) => {
  Playlist.findById(req.params.id)
  .then(playlist => {
    if (!playlist) return res.status(404).send({
      message: 'Playlist not found'
    })
    if (playlist.userId !== req.user.id) return res.status(404).send({
      message: 'Playlist not found'
    })
    Song.findById(req.body.id)
    .then(song => {
      if (!song) return res.status(404).send({
        message: 'Song not found'
      })
      song.update({ playlistId: playlist.id })
      .catch(error => next(error))
    })
    .catch(error => next(error))
  })
  .catch(error => next(error))
})

module.exports = router