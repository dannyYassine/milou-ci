import { BaseEvent } from '@app/core/events/BaseEvent';

export class TriggeredJobEvent extends BaseEvent {
  constructor(jobId) {
    super();
    this.jobId = jobId;
  }
}
