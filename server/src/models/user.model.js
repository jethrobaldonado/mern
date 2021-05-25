import mongoose from 'mongoose';

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    username: String,
    password: String,
    email: String,
  })
);

export default User;