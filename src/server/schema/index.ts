import gql from 'graphql-tag'
import { makeExecutableSchema } from 'graphql-tools'
import { rootService } from 'server/services'

const typeDefs = gql`
  type ContentModel {
    _id: ID!
    name: String!
    apiIdentifier: String
    description: String
  }

  input ContentModelInput {
    name: String!
    apiIdentifier: String
    description: String
  }

  type Query {
    allContentModels: [ContentModel]
  }

  type Mutation {
    createContentModel(input: ContentModelInput): ContentModel
  }
`
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers: rootService
})
