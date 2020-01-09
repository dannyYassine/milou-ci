import {BaseEventHandler} from "@app/api/listeners/BaseEventHandler";

export class UserCreated extends BaseEventHandler {
  handle(event) {
    this.ioc.use('MailService').send({
      to: 'dannyyassine@gmail.com', // list of receivers
      subject: 'Subject of your email', // Subject line
      html: '<p>Your html here</p>'// plain text body
    });
  }
}