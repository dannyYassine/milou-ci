import { BaseEventHandler } from '@app/core/listeners/BaseEventHandler';
import { UserCreatedEvent } from '@app/modules/projects/events/UserCreatedEvent';

export class UserCreated extends BaseEventHandler {
  /**
   * @override
   */
  addSubscriptions() {
    this.subscribeTo(UserCreatedEvent);
  }

  /**
   * @param {UserCreatedEvent} event
   */
  handle(event) {
    this.ioc.use('MailService').send({
      to: 'dannyyassine@gmail.com', // list of receivers
      subject: 'Subject of your email', // Subject line
      html: '<p>Your html here</p>', // plain text body
    });
  }
}
