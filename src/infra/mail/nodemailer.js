import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'dannyyassine@gmail.com',
    pass: 'jpmilou@home'
  }
});

export class MailService {
  send(options) {
    const readStream = fs.createReadStream(path.join(path.resolve(), '/src/infra/mail', "/bloom-mailchimp.html"));
    options.text = undefined;
    options.html = readStream;
    options.from = 'dannyyassine@gmail.com';
    transporter.sendMail(options, function (err, info) {
      readStream.destroy();
    });
  }
}
