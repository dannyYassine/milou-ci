import express from 'express';
import { ioc } from '@app/api/providers/ioc';
import { PresenterApi } from '@app/api/modules/core/PresenterApi';
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
}
