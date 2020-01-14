import { BaseEventHandler } from '@app/core/listeners/BaseEventHandler';

export class JobFinishedHandler extends BaseEventHandler {
  /**
   *
   * @param {JobFinishedEvent} event
   */
  handle(event) {
    this.ioc.use('MailService').sendResetPassword({
      email: 'dannyyassine@gmail.com',
    });
  }
}
