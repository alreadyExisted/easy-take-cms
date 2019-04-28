import express from 'express'
import { config } from 'config'
import graphqlHTTP from 'express-graphql'
import { schema } from 'server/schema'
import 'server/db'

const app = express()

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
