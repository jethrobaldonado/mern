import bcrypt from 'bcrypt';
import User from '../../models/user.model';
import Config from '../../config';
import jwt from 'jsonwebtoken';

export default class UserService {
  constructor(res) {
    this.res = res;
  }
  async login(email, password) {
    const user = await User.findOne({ email: email });
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const accessToken = jwt.sign({ email: user.email }, Config.accessTokenSecret);
        this.res.status(200).json({ accessToken: accessToken });
      } else {
        this.res.status(400).json({ error: 'Invalid Password' });
      }
    } else {
      this.res.status(401).json({ error: 'User does not exist' });
    }
  }

  async register(email, username, password) {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const user = new User({
      username: username,
      password: passwordHash,
      email: email
    });

    user.save().then((doc) => this.res.status(201).send(doc));
  }

  async details(email) {
    const user = await User.findOne({ email: email }, 'username email _id')
    if (user) {
      this.res.status(200).json(user);
    } else { 
      this.res.status(404).json({ error: 'User not found' });
    }
  }
}