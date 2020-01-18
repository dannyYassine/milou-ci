import { BaseEventHandler } from '@app/core/listeners/BaseEventHandler';
import { JobFinishedEvent } from '@app/modules/jobs/events/JobFinishedEvent';

export class JobFinishedHandler extends BaseEventHandler {
  handle(event: JobFinishedEvent) {
    this.ioc.use('MailService').sendResetPassword({
      email: 'dannyyassine@gmail.com',
    });
  }
}
