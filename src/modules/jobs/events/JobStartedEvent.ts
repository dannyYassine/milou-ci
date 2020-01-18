import { BaseEvent } from '@app/core/events/BaseEvent';
import { Job } from '@app/modules/jobs/models/Job';

export class JobStartedEvent extends BaseEvent {
  public job: Job;

  public pid: number;

  constructor(job: Job, pid: number) {
    super();
    this.job = job;
    this.pid = pid;
  }
}
