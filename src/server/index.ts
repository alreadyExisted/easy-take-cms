import express from 'express'
import mongoose from 'mongoose'
import { config } from 'config'
import graphqlHTTP from 'express-graphql'
import { schema } from 'server/schema'

const app = express()

// mongoose.Promise = global.Promise
mongoose.connect(config.dbConnectionString, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
mongoose.connection.once('open', () => {
  console.log('conneted to database')
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.get('/', (_req, res) => {
  res.json({
    msg: 'Hello World'
  })
})

app.listen(config.port, config.host, () => {
  console.log(`Server is listening on http://${config.host}:${config.port}`)
})
