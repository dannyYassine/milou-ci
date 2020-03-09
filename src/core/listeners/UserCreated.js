import { BaseEventHandler } from '@app/core/listeners/BaseEventHandler';
import { UserCreatedEvent } from '@app/modules/user/events/UserCreatedEvent';
import { MailService } from '@app/infra/mail';

export class UserCreated extends BaseEventHandler {
  /**
   * @param {UserCreatedEvent} event
   */
  handle(event) {
    this.ioc.use(MailService).send({
      to: 'dannyyassine@gmail.com', // list of receivers
      subject: 'Subject of your email', // Subject line
      html: '<p>Your html here</p>', // plain text body
    });
  }
}
