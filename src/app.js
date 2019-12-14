import express from 'express';
import errorHandler from 'errorhandler';
import cors from 'cors';

import config from './config';
import homeController from './controllers/home';
import apiController from './controllers/api';

const app = express();

app.set('domain', config.domain);
app.set('port', config.port);
app.set('env', config.env);

if (config.env === 'development') {
  // Error handler middleware
  app.use(errorHandler());
}

// Cors middleware
app.use(
  cors({
    origin: config.corsDomain,
    optionsSuccessStatus: 200,
  })
);

app.get('/', homeController.index);

app.get('/api', apiController.getApi);
app.get('/api/status', apiController.getStatus);

export default app;
