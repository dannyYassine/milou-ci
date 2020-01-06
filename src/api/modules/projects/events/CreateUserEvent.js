import { BaseEvent } from 'app/api/modules/core/events/BaseEvent';

class CreateUserEvent extends BaseEvent {
  constructor(userId) {
    super();
    this.userId = userId;
  }
}
