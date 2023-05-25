import mongoose from 'mongoose'
const ObjectId = mongoose.Types.ObjectId

const ComicSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: function () {
      return new ObjectId().toString()
    }
  },
  status: String,
  author: String,
  genres: Array,
  otherNames: String,
  review: String,
  newestChapter: Number,
  view: Number,
  name: String,
  updatedAt: String,
  slug: String,
  chapSuggests: Array,
  follow: Number,
  comment: Number
})

export default mongoose.model('comics', ComicSchema)
