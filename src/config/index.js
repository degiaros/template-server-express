import dotenv from 'dotenv';
import development from './envs/development';
import production from './envs/production';

dotenv.config();

const ENV = process.env.NODE_ENV || 'development';
const envConfig = ENV === 'development' ? development : production;

const config = Object.assign(
  {
    env: ENV,
  },
  envConfig
);

export default config;
