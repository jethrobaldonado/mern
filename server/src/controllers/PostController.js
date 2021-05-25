import PostService from '../services/posts';

export default class PostController {
  async newPost(req, res) {
    const { body } = req;
    if (!(body.title && body.content)) {
      return res.status(400).send({ error: 'Fields are required' });
    }

    const postService = new PostService(res);
    return postService.create(body);
  }

  async getAll(req, res) {
    const postService = new PostService(res);
    return postService.get();
  }

  async getById(req, res) {
    const { params } = req;
    const postService = new PostService(res);
    console.log(params);
    return postService.getById(params.id);
  }

  async update(req, res) {
    const { params, body } = req;
    const postService = new PostService(res);
    return postService.update(params.id, body);
  }

  async delete(req, res) {
    const { params } = req;
    const postService = new PostService(res);
    return postService.delete(params.id);
  }
}