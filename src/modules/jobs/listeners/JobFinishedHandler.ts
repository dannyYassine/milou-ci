import { BaseEventHandler } from '@app/core/listeners/BaseEventHandler';
import { JobFinishedEvent } from '@app/modules/jobs/events/JobFinishedEvent';
import { MailService } from '@app/infra/mail/MailService';

export class JobFinishedHandler extends BaseEventHandler {
  handle(event: JobFinishedEvent) {
    this.ioc.use<MailService>('MailService').sendResetPassword({
      email: 'dannyyassine@gmail.com',
    });
  }
}
