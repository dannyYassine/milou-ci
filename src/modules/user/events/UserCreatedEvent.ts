import { BaseEvent } from '@app/core/events/BaseEvent';
import { User } from '@app/modules/user/models/User';

export class UserCreatedEvent extends BaseEvent {
  private user: User;

  constructor(user: User) {
    super();
    this.user = user;
  }

  getEmail(): string {
    return this.user.email;
  }

  getId(): string {
    return this.user.id;
  }
}
