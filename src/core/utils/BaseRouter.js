const express = require('express');

class BaseRoute {
    constructor(path, handler) {
        this.router = express.Router();
        this.path = path;
        this.handler = handler;
    }
}