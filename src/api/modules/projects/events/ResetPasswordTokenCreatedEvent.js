import { BaseEvent } from '@app/api/modules/core/events/BaseEvent';

export class ResetPasswordTokenCreatedEvent extends BaseEvent {
  constructor(user) {
    super();
    this.email = user.email;
  }
}
