import { BaseEvent } from '@app/core/events/BaseEvent';

export class UserCreatedEvent extends BaseEvent {
  constructor(userId) {
    super();
    this.userId = userId;
  }
}
