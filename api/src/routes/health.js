import { Router } from 'express';
import { env } from '../config/env.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    status: 'ok',
    environment: env.nodeEnv,
    service: env.appName,
    timestamp: new Date().toISOString()
  });
});

export default router;
