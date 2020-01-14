import { BaseEvent } from '@app/core/events/BaseEvent';

export class JobDataOutputedEvent extends BaseEvent {
  constructor({ pid, data }) {
    super();
    this.data = data;
    this.pid = pid;
  }
}
