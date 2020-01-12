import express from 'express';
import { ioc } from '@app/core/ioc';
import { setup } from './../../providers';
import { init as ApiInit } from '@app/interfaces/http/api';

export class Application {
  /**
   * @type {express.Application}
   */
  app;

  constructor() {
    this.app = express();
  }

  /**
   * Load and setup application dependencies
   */
  bootstrap() {
    setup();

    ApiInit(this.app);

    this.app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    this.app.get('/health', (req, res) => {
      res.status(200).json({ data: 'Healthy' });
    });

    this.app.use(function(err, req, res, next) {
      console.log(err.stack);
      const errorCode = err.constructor.name === 'Error' ? 500 : 404;
      res.status(errorCode).json({
        error: errorCode,
        data: err.message,
      });
    });

    return this;
  }

  /**
   * Execute application
   */
  run() {
    const config = ioc.use('Config');
    this.app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}!`);
    });
  }
}
