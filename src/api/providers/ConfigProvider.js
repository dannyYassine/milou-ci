import {BaseProvider} from "@app/api/providers/BaseProvider";
import config from './../../../milou.config.json';
import { MailService } from './../../infra/mail';

export class ConfigProvider extends BaseProvider {
  register() {
    this.ioc.singleton('Config', () => {
      return config;
    });

    this.ioc.singleton('MailService', () => {
      return new MailService();
    });
  }
}