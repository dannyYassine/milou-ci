import { BaseProvider } from '@app/api/providers/BaseProvider';
import { CreateUserService } from '@app/api/modules/projects/services/CreateUserService';
import { UserRepository } from '@app/api/modules/projects/repository/UserRepository';
import { ProjectService } from '@app/api/modules/projects/services/ProjectService';
import { UserCreatedEvent } from '../modules/projects/events/UserCreatedEvent';
import { UserCreated } from '../listeners/UserCreated';
import { ResetUserPasswordUseCase } from '../modules/projects/services/ResetUserPasswordUseCase';
import { ResetPasswordTokenCreatedEvent } from '../modules/projects/events/ResetPasswordTokenCreatedEvent';
import { ResetPasswordTokenHandler } from '../modules/projects/listeners/ResetPasswordTokenHandler';

export class UserProvider extends BaseProvider {
  register() {
    this.ioc.bind('createUser', () => {
      return new CreateUserService({
        userRepository: new UserRepository(),
        eventDispatcher: this.ioc.use('eventDispatcher'),
      });
    });
    this.ioc.bind('ProjectCRUD', () => {
      return new ProjectService(
        new UserRepository(),
        this.ioc.use('eventDispatcher')
      );
    });
    this.ioc.bind('ResetUserPasswordUseCase', () => {
      return new ResetUserPasswordUseCase({
        userRepository: new UserRepository(),
        eventDispatcher: this.ioc.use('eventDispatcher'),
        mailService: this.ioc.use('MailService'),
      });
    });
  }

  boot() {
    this.ioc.use('eventDispatcher').on(UserCreatedEvent, UserCreated);
    this.ioc
      .use('eventDispatcher')
      .on(ResetPasswordTokenCreatedEvent, ResetPasswordTokenHandler);
  }
}
