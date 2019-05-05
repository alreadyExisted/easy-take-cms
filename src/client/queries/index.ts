import { gql } from 'apollo-boost'

export const getContentModelsQuery = gql`
  {
    allContentModels {
      name
      apiIdentifier
      description
    }
  }
`

export const createContentModelsQuery = gql`
  mutation CreateContentModel(
    $name: String!
    $apiIdentifier: String
    $description: String
  ) {
    createContentModel(
      input: {
        name: $name
        apiIdentifier: $apiIdentifier
        description: $description
      }
    ) {
      _id
      name
      apiIdentifier
      description
    }
  }
`
