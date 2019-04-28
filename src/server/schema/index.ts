import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} from 'graphql'
import { ContentModel } from 'server/models/content-model'

const ContentModelType = new GraphQLObjectType({
  name: 'ContentModel',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    apiIdentifier: { type: GraphQLString },
    description: { type: GraphQLString }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    contentModels: {
      type: new GraphQLList(ContentModelType),
      resolve() {
        return ContentModel.find()
      }
    }
  }
})

export const schema = new GraphQLSchema({
  query: RootQuery
})
