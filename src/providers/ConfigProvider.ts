import { BaseProvider } from '@app/core/BaseProvider';
import * as config from './../../milou.config.json';
import { MailService } from '@app/infra/mail';

export class ConfigProvider extends BaseProvider {
  register() {
    this.ioc.singleton('Env', () => {
      return { ...process.env };
    });

    this.ioc.singleton('Config', () => {
      console.log('config: ', config);
      return config;
    });

    this.ioc.singleton('MailService', () => {
      return new MailService();
    });
  }
}
