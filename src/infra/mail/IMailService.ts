import { MailOption } from './MailOption';

export interface IMailService {
  /**
   * @async
   * @param options
   */
  sendResetPassword(options: MailOption): void;

  /**
   * @async
   * @param options
   */
  send(options: MailOption): void;
}
