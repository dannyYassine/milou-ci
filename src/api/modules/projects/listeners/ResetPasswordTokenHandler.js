import { BaseEventHandler } from '@app/api/listeners/BaseEventHandler';

export class ResetPasswordTokenHandler extends BaseEventHandler {
  /**
   *
   * @param {ResetPasswordTokenCreatedEvent} event
   */
  handle(event) {
    this.ioc.use('MailService').sendResetPassword({
      email: event.email,
    });
  }
}
