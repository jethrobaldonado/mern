import mongoose from 'mongoose';
import userModel from './user.model';

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = userModel;

export default db;