import express from 'express';
import config from './../milou.config.json';
import {init as ApiInit} from './api';

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

        ApiInit(this.app);

        this.app.get('/', (req, res) => {
            res.send('Hello World!')
        });

        return this;
    }

    /**
     * Execute application
     */
    run() {
        this.app.listen(port, () => {
            console.log(`Example app listening on port ${config.port}!`)
        });
    }
}