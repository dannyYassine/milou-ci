import express from 'express';
import { router as projectsRouter } from './modules/projects/routes';

/**
 * @param {Express.Application} app 
 */
export function init(app) {
    projectsRouter(app);
}