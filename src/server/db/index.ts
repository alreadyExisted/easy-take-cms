import { config } from 'config'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise

mongoose.connect(config.dbConnectionString, {
  useNewUrlParser: true
})

mongoose.connection.once('open', () => {
  console.log('conneted to database')
})

mongoose.connection.on(
  'error',
  console.error.bind(console, 'connection error:')
)
