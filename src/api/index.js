const express = require('express');
const { router: projectsRouter } = require('./modules/projects/routes');

/**
 * @param {Express.Application} app 
 */
function init(app) {
    app.use('/api/projects', projectsRouter);


}

module.exports = {
    init
};