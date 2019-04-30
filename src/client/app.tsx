import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { config } from 'config'

const client = new ApolloClient({
  uri: `http://${config.host}:${config.port}/graphql`
})

export const App = () => (
  <ApolloProvider client={client}>
    <h1>Hello World</h1>
  </ApolloProvider>
)
