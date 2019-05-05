import ApolloClient from 'apollo-boost'
import { ContentModelCreator } from 'client/components/content-model-creator'
import { ContentModelList } from 'client/components/content-model-list'
import { config } from 'config'
import React from 'react'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: `http://${config.host}:${config.port}/graphql`
})

// tslint:disable-next-line:variable-name
export const App = () => (
  <ApolloProvider client={client}>
    <h1>Hello World</h1>
    <ContentModelList />
    <ContentModelCreator />
  </ApolloProvider>
)
