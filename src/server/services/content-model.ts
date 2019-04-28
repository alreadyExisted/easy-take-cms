import ContentModel from 'server/models/content-model'

export const contentModelService = {
  async allContentModels() {
    return await ContentModel.find()
  },

  async createContentModel(_: any, { input }: any) {
    return await ContentModel.create(input)
  }
}
