import ContentModel, { ContentModelData } from 'server/models/content-model'

interface InputData {
  input: ContentModelData
}

export const contentModelService = {
  async allContentModels() {
    return ContentModel.find()
  },

  async createContentModel(_: any, { input }: InputData) {
    return ContentModel.create(input)
  }
}
