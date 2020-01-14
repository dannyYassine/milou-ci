import { BaseEvent } from '@app/core/events/BaseEvent';

export class JobStartedEvent extends BaseEvent {
  constructor({ job, pid }) {
    super();
    this.job = job;
    this.pid = pid;
  }
}
