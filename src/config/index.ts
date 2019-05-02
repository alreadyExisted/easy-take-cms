import { isBrowser } from 'common/utils'

export const config = {
  port: isBrowser ? window.env.api.self.port : process.env.PORT,
  host: isBrowser ? window.env.api.self.host : process.env.HOST,
  dbConnectionString: process.env.MONGODB_CONNECTION_STRING
}
