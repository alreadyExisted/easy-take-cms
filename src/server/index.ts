import { config } from 'config'
import cors from 'cors'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import 'server/db'
import { schema } from 'server/schema'

const app = express()

app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.get('/', (_req, res) => {
  res.json({
    msg: 'Hello World 2'
  })
})

app.listen(config.port, config.host, () => {
  console.log(`Server is listening on http://${config.host}:${config.port}`)
})
