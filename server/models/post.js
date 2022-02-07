import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  user: String,
  username: String,
  isVerified: Boolean,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: String,
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage