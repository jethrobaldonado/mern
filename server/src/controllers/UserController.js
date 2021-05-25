export default class UserController {
  
  constructor() {

  }

  async login(req, res) {
    return res.status(200).json({'test':'test'});
  }

}