import nodemailer from 'nodemailer';
console.log(process.env.MAIL_PASSWORD);
export const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'dannyyassine@gmail.com',
    pass: process.env.MAIL_PASSWORD,
  },
});
