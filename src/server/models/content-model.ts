import mongoose from 'mongoose'

const Schema = mongoose.Schema

export interface ContentModelData {
  name: string
  apiIdentifier: string
  description: string
}

// tslint:disable-next-line:variable-name
const ContentModelSchema = new Schema({
  name: String,
  apiIdentifier: String,
  description: String
})

// tslint:disable-next-line:no-default-export
export default mongoose.model('contentModel', ContentModelSchema)
