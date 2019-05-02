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
