import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dannyyassine@gmail.com',
    pass: 'jpmilou@home'
  }
});

export class MailService {
  send(options) {
    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err)
      }
      else {
        console.log(info);
      }
    });
  }
}
