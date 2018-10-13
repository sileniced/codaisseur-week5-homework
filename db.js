const Sequelize = require('sequelize')

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'
const sequelize = new Sequelize(connectionString, {
  define: {
    timestamp: false
  }
})

const force = true

sequelize.sync({ force })
.then(() => {
  console.log('-- S U C C E S -- Database updated')
})
.catch(console.error)

module.exports = sequelize