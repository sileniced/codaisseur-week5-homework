const { Router } = require('express')
const router = new Router()
const auth = require('../authentication/auth')

const Playlist = require('./model')
const Song = require('../songs/model')

const check = (bool, status, res) => {
  if (!bool) res.status(status).send({
    message: 'playlist not found'
  })
  return bool
}

router.post('/playlists', auth, (req, res, next) => {
    if (!req.body.name) return res.status(404).send({
      message: 'Cannot create nameless playlist'
    })
    Playlist.create({
      name: req.body.name,
      userId: req.user.id
    })
    .then(user => res.status(201).send(user))
    .catch(error => next(error))
  }
)

router.get('/playlists', auth, (req, res, next) =>
  Playlist.findAll({ where: { userId: req.user.id } })
  .then(playlists => res.status(200).send({ playlists }))
  .catch(error => next(error))
)

router.get('/playlists/:id', auth, (req, res, next) =>
  Playlist.findById(req.params.id
    // , { include: [Song] }
    )
  .then(playlist => {
    if (
      check(playlist, 404, res) &&
      check(playlist.userId === req.user.id, 401, res)
    ) {
      res.status(200).send({ playlist })
    }
  })
  .catch(error => next(error))
)

router.delete('/playlists/:id', auth, (req, res, next) =>
  Playlist.findById(req.params.id)
  .then(playlist => {
    if (
      check(playlist, 404, res) &&
      check(playlist.userId === req.user.id, 401, res)
    ) {
      playlist.destroy()
      .then(() => res.status(201).send({
        message: `playlist: ${playlist.name} had been deleted`
      }))
    }
  })
  .catch(error => next(error))
)

module.exports = router