import mongoose, { Schema } from 'mongoose'

const contentModelSchema = new Schema({
  name: String,
  apiIdentifier: String,
  description: String
})

export const ContentModel = mongoose.model('ContentModel', contentModelSchema)
