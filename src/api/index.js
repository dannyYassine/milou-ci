const express = require('express');
const { router: projectsRouter } = require('./modules/projects/routes');

/**
 * @param {Express.Application} app 
 */
export function init(app) {
    app.use('/api/projects', projectsRouter);
}