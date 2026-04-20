import dotenv from 'dotenv';

dotenv.config({ path: process.env.ENV_FILE || '.env' });

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 4000),
  appName: process.env.APP_NAME || 'Node React Boilerplate API',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173'
};
