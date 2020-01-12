import { BaseEventHandler } from '@app/core/listeners/BaseEventHandler';
import { ResetPasswordTokenCreatedEvent } from '@app/modules/projects/events/ResetPasswordTokenCreatedEvent';

export class ResetPasswordTokenHandler extends BaseEventHandler {
  addSubscriptions() {
    this.subscribeTo(ResetPasswordTokenCreatedEvent);
  }

  /**
   * @param {ResetPasswordTokenCreatedEvent} event
   */
  handle(event) {
    this.ioc.use('MailService').sendResetPassword({
      email: event.email,
    });
  }
}
