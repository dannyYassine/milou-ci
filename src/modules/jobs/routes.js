import express from 'express';
import { ioc } from '@app/core/ioc';
import { PresenterApi } from '@app/interfaces/http/core/PresenterApi';
import { TriggeredJobEvent } from './events/TriggeredJobEvent';

export function router(app) {
  const router = express.Router();
  app.use('/api/jobs', router);

  router.get('/:id', async (request, response, next) => {
    try {
      ioc.use('eventDispatcher').emit(new TriggeredJobEvent(request.params.id));
      return PresenterApi.send(response, true);
    } catch (e) {
      next(e);
    }
  });
}
