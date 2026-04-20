import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import healthRoute from './routes/health.js';
import appRoute from './routes/app.js';
import { env } from './config/env.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: env.corsOrigin }));
  app.use(morgan(env.nodeEnv === 'production' ? 'combined' : 'dev'));
  app.use(express.json());

  app.get('/api', (req, res) => {
    res.json({ name: env.appName, environment: env.nodeEnv });
  });

  app.use('/api/health', healthRoute);
  app.use('/api/app', appRoute);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
