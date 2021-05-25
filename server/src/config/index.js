import dotenv from 'dotenv';

const envExists = dotenv.config();

if (envExists.error) {
  throw new Error('ENV file not found');
}

export default {
  port: process.env.PORT || 8082,
  dbHost: process.env.DB_HOST || 'mongodb',
  dbPort: process.env.DB_PORT || 27017,
  dbName: process.env.DB_NAME || 'api',
  accessTokenSecret: process.env.SECRET || 'thisissecret',
}