import { BaseEvent } from 'app/api/modules/core/events/BaseEvent';

export class UserCreatedEvent extends BaseEvent {
  constructor(userId) {
    super();
    this.userId = userId;
  }
}
