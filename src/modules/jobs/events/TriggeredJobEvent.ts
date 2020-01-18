import { BaseEvent } from '@app/core/events/BaseEvent';

export class TriggeredJobEvent extends BaseEvent {
  public jobId: string;

  constructor(jobId: string) {
    super();
    this.jobId = jobId;
  }
}
