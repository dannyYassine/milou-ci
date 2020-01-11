import { ioc } from '@app/api/providers/ioc';
import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'dannyyassine@gmail.com',
    pass: ioc.use('Env').MAIL_PASSWORD,
  },
});
