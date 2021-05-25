import jwt from 'jsonwebtoken';
import Config from '../../config';

const jwtAuth = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    const token = authorization.split(' ')[1];
    jwt.verify(token, Config.accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    })
  } else { res.sendStatus(401) }
}

export default jwtAuth;