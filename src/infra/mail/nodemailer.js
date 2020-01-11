import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'dannyyassine@gmail.com',
    pass: 'jpmilou@home',
  },
});
