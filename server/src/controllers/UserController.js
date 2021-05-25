import UserService from '../services/users';

export default class UserController {
  
  async login(req, res) {
    const { body } = req;
    if (!(body.email && body.password)) {
      return res.status(400).send({ error: 'Fields are required' });
    }
    const userService = new UserService(res);
    return userService.login(body.email, body.password);
  }

  async logout(req, res) {
    return res.status(200).json({'test': 'test'});
  }

  async me(req, res) {
    const userService = new UserService(res);
    try {
      return userService.details(req.user.email);
    } catch (err) {
      res.status(400).send({error: err});
    }
  }

  async register(req, res) {
    const { body } = req;
    if (!(body.email && body.password && body.username)) {
      return res.status(400).send({ error: 'Fields are required' });
    }
    const userService = new UserService(res);
    return userService.register(body.email, body.username, body.password);
  }
}