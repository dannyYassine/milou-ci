import { BaseEvent } from '@app/core/events/BaseEvent';

export class JobFinishedEvent extends BaseEvent {
  constructor({ success, pid }) {
    super();
    this.success = success;
    this.pid = pid;
  }
}
