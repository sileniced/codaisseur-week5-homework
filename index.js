const app = require('express')()
const cors = require('cors')()
const bodyParser = require('body-parser').json();

const AuthRoutes = require('./authentication/routes')
const UserRoutes = require('./users/routes')
const PlaylistRoutes = require('./playlists/routes')
const SongRoutes = require('./songs/routes')

const port = process.env.PORT || 4000;

app
.use(cors)
.use(bodyParser)
.use(AuthRoutes)
.use(UserRoutes)
.use(PlaylistRoutes)
.use(SongRoutes)
.listen(
  port,
  () => console.log('port =', port)
)