const express = require('express');
const port = require('./../milou.config.json').port;
const {init: ApiInit} = require('./api');

class Application {

    /**
     * @type {Express.Application}
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
            console.log(`Example app listening on port ${port}!`)
        });
    }
}

module.exports = {
    Application
}