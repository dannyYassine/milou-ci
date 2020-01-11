import express from 'express';
import { ioc } from '@app/api/providers/ioc';
import { CreateUserDto } from '@app/api/modules/projects/dtos/CreateUserDto';
import { PresenterApi } from '@app/api/modules/core/PresenterApi';
import { UserCreatedEvent } from './events/UserCreatedEvent';
import { ResetUserPasswordDto } from './dtos/ResetUserPasswordDto';

export function router(app) {
  const router = express.Router();
  app.use('/api/users', router);

  router.get('/signup', async (request, response, next) => {
    try {
      console.log(request.query);
      return PresenterApi.send(
        response,
        await ioc.use('createUser').execute(
          new CreateUserDto({
            username: request.query.username,
            password: request.query.password,
            email: request.query.email,
          })
        )
      );
    } catch (e) {
      next(e);
    }
  });

  router.get('/resetpassword', async (request, response, next) => {
    try {
      const { email } = request.query;
      return PresenterApi.send(
        response,
        await ioc
          .use('ResetUserPasswordUseCase')
          .execute(new ResetUserPasswordDto(email))
      );
    } catch (e) {
      next(e);
    }
  });

  // router.get('/event', async (request, response) => {
  //     return PresenterApi.send(
  //       response,
  //       ioc.use('eventDispatcher').emit(new UserCreatedEvent(123))
  //     );
  // });
}
