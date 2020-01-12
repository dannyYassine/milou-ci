import { BaseEvent } from '@app/core/events/BaseEvent';

export class UserCreatedEvent extends BaseEvent {
  constructor(user) {
    super();
    this.user = user;
  }

  getEmail() {
    return this.user.email;
  }
}
