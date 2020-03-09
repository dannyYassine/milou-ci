import { BaseEventHandler } from '@app/core/listeners/BaseEventHandler';
import { ResetPasswordTokenCreatedEvent } from '@app/modules/user/events/ResetPasswordTokenCreatedEvent';
import { MailService } from '@app/infra/mail';

export class ResetPasswordTokenHandler extends BaseEventHandler {
  addSubscriptions() {
    this.subscribeTo(ResetPasswordTokenCreatedEvent);
  }

  /**
   * @param {ResetPasswordTokenCreatedEvent} event
   */
  handle(event) {
    this.ioc.use(MailService).sendResetPassword({
      email: event.email,
    });
  }
}
