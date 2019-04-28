import { contentModelService } from 'server/services/content-model'

const { allContentModels, createContentModel } = contentModelService

export const rootService = {
  Query: {
    allContentModels
  },
  Mutation: {
    createContentModel
  }
}
