import { BaseProvider } from '@app/core/BaseProvider';
import { MailService } from '@app/infra/mail';

export class MailProvider extends BaseProvider {
  register() {
    this.ioc.singleton<MailService>(MailService, () => {
      return new MailService();
    });
  }
}
