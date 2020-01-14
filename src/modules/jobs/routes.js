import express from 'express';
import { ioc } from '@app/core/ioc';
import { PresenterApi } from '@app/interfaces/http/core/PresenterApi';
import { TriggeredJobEvent } from './events/TriggeredJobEvent';

export function router(app) {
  const router = express.Router();
  app.use('/api/jobs', router);

  router.get('/:id', async (request, response, next) => {
    try {
      return PresenterApi.send(
        response,
        await ioc
          .use('eventDispatcher')
          .emit(new TriggeredJobEvent(request.params.id))
      );
    } catch (e) {
      next(e);
    }
  });

  router.get('/:pid/kill', async (request, response, next) => {
    try {
      const result = await ioc
        .use('StopJobUseCase')
        .execute(request.params.pid);
      return PresenterApi.send(response, result);
    } catch (e) {
      next(e);
    }
  });
}
