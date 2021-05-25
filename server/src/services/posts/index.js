import Post from '../../models/post.model';
import mongoose from 'mongoose';

export default class PostService {
  constructor(res) {
    this.res = res;
  }
  
  async create(postDetails) {
    const userPost = new Post(postDetails);

    userPost.save().then((doc) => this.res.status(201).send(doc));
  }

  async get() {
    const userPosts = await Post.find({});
    return this.res.status(200).send(userPosts);
  }

  async getById(id) {
    try {
      const userPosts = await Post.findOne({ _id: mongoose.Types.ObjectId(id) });
      if (userPosts) {
        return this.res.status(200).send(userPosts);
      } else {
        return this.res.status(404).send({ error: 'Not Found' });
      }
    } catch (err) {
      return this.res.status(400).send({ error: 'Invalid Id' })
    }
  }

  async update(id, body) {
    try {
      const userPosts = await Post.findOneAndUpdate(
        { _id: mongoose.Types.ObjectId(id) },
        body,
        { new: true }
      );
      if (userPosts) {
        return this.res.status(200).send(userPosts);
      } else {
        return this.res.status(404).send({ error: 'Not Found' });
      }
    } catch (err) {
      return this.res.status(400).send({ error: 'Invalid Id' })
    }
  }

  async delete(id) {
    try {
      await Post.findOneAndDelete(
        { _id: mongoose.Types.ObjectId(id) },
      ).then((doc) => this.res.status(201).send(doc));
    } catch (err) {
      return this.res.status(400).send({ error: 'Invalid Id' })
    }
  }
}