import { BaseEventHandler } from '@app/core/listeners/BaseEventHandler';
import { JobDataOutputedEvent } from '@app/modules/jobs/events/JobDataOutputedEvent';

export class JobDataOutputedHandler extends BaseEventHandler {
  handle(event: JobDataOutputedEvent) {
    console.log(event.data.toString('ascii'));
  }
}
