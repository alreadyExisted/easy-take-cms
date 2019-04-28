import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ContentModelSchema = new Schema({
  name: String,
  apiIdentifier: String,
  description: String
})

export default mongoose.model('contentModel', ContentModelSchema)
