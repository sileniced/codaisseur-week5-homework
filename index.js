const app = require('express')()
const cors = require('cors')()
const bodyParser = require('body-parser').json();

const UserRoutes = require('./users/routes')

const port = process.env.PORT || 4000;

app
.use(cors)
.use(bodyParser)
.use(UserRoutes)
.listen(
  port,
  () => console.log('port =', port)
)