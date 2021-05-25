import mongoose from 'mongoose';

const Post = mongoose.model(
  'Post',
  new mongoose.Schema({
    title: String,
    content: String,
    userId: String,
    created_at: Date
  })
);

export default Post;