import dotenv from 'dotenv';

const envExists = dotenv.config();

if (envExists.error) {
  throw new Error('ENV file not found');
}

export default {
  port: process.env.PORT || 8082,
}