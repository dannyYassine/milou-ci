import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'dannyyassine@gmail.com',
    pass: 'jpmilou@home',
  },
});

export class MailService {
  static templatesPath = '/src/infra/mail';

  static async getTemplateStream(file) {
    return fs.createReadStream(
      path.join(path.resolve(), '/src/infra/mail', `/${file}.html`)
    );
  }

  /**
   * @async
   * @param options
   * @returns {Promise<void>}
   */
  async sendResetPassword(options) {
    const readStream = await MailService.getTemplateStream('reset-password');

    options.text = undefined;
    options.to = options.email;
    options.subject = 'Reset Password';
    options.from = 'dannyyassine@gmail.com';
    options.html = readStream;

    this.send(options);
  }

  /**
   * @async
   * @param options
   * @returns {Promise<unknown>}
   */
  send(options) {
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
