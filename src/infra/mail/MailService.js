import fs from 'fs';
import path from 'path';
import { MailTemplate } from './MailTemplate';
import { transporter } from './nodemailer';
import { MailOption } from './MailOption';

export class MailService {
  static getTemplatesPath() {
    return '/src/infra/mail/templates';
  }

  static async getTemplateStream(file) {
    return fs.createReadStream(
      path.join(path.resolve(), MailService.getTemplatesPath(), `/${file}.html`)
    );
  }

  /**
   * @async
   * @param options
   * @returns {Promise<void>}
   */
  async sendResetPassword(options) {
    const readStream = await MailService.getTemplateStream(
      MailTemplate.RESET_PASSWORD
    );

    options.subject = 'Reset Password';
    options.to = options.email;
    options.html = readStream;

    this.send(options);
  }

  /**
   * @async
   * @param options
   * @returns {Promise<unknown>}
   */
  send(options) {
    options.text = undefined;
    options.from = 'dannyyassine@gmail.com';

    return new Promise((resolve, reject) => {
      transporter.sendMail(options, function(err, info) {
        if (err) {
          return reject(err);
        }

        if (typeof options.html !== 'string') {
          options.html.destroy();
        }

        resolve();
      });
    });
  }
}
