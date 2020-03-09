import { BaseProvider } from '@app/core/BaseProvider';
import { CreateUserService } from '@app/modules/user/services/CreateUserService';
import { UserRepository } from '@app/modules/user/repository/UserRepository';
import { ProjectService } from '@app/modules/user/services/ProjectService';
import { UserCreatedEvent } from '@app/modules/user/events/UserCreatedEvent';
import { UserCreated } from '@app/core/listeners/UserCreated';
import { ResetUserPasswordUseCase } from '../modules/user/services/ResetUserPasswordUseCase';
import { ResetPasswordTokenCreatedEvent } from '../modules/user/events/ResetPasswordTokenCreatedEvent';
import { ResetPasswordTokenHandler } from '../modules/user/listeners/ResetPasswordTokenHandler';
import { TransactionService } from '@app/infra/database/TransactionService';
import { IEventDispatcher } from '@app/core/events/IEventDispatcher';
import { EventDispatcher } from '@app/core/events/EventDispatcher';
import { MailService } from '@app/infra/mail';
import { IMailService } from '@app/infra/mail/IMailService';

export class UserProvider extends BaseProvider {
  register() {
    this.ioc.bind('createUser', () => {
      return new CreateUserService({
        userRepository: new UserRepository(new TransactionService()),
        eventDispatcher: this.ioc.use<IEventDispatcher>(EventDispatcher),
      });
    });
    this.ioc.bind('ProjectCRUD', () => {
      return new ProjectService(
        new UserRepository(),
        this.ioc.use<IEventDispatcher>(EventDispatcher)
      );
    });
    this.ioc.bind('ResetUserPasswordUseCase', () => {
      return new ResetUserPasswordUseCase({
        userRepository: new UserRepository(new TransactionService()),
        eventDispatcher: this.ioc.use(EventDispatcher),
        mailService: this.ioc.use<IMailService>(MailService),
      });
    });
  }

  boot() {
    this.ioc
      .use<IEventDispatcher>(EventDispatcher)
      .handle(UserCreatedEvent.name, new UserCreated())
      .handle(
        ResetPasswordTokenCreatedEvent.name,
        new ResetPasswordTokenHandler()
      );
  }
}
