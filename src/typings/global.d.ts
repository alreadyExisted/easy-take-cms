declare namespace NodeJS {
  interface ProcessEnv {
    PORT: number
    HOST: string
    MONGODB_CONNECTION_STRING: string
  }
}

interface Window {
  env: {
    api: {
      self: {
        host: string
        port: number
      }
    }
  }
}
