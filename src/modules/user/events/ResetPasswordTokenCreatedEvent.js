import { BaseEvent } from '@app/core/events/BaseEvent';

export class ResetPasswordTokenCreatedEvent extends BaseEvent {
  constructor(user) {
    super();
    this.email = user.email;
  }
}
