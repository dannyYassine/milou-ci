import express from 'express';

import { ProjectService } from './services/ProjectService';

export const router = express.Router();

router.get('/', async (_request, response) => {
    response.status(200).json({
        data: await ProjectService.factory().readAll()
    });
});

router.get('/:id', async (request, response) => {
    console.log(request.params.id);
    response.status(200).json({
        data: await ProjectService.factory().read(request.params.id)
    });
});