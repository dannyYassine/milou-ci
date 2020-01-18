import { BaseEventHandler } from '@app/core/listeners/BaseEventHandler';
import { JobStartedEvent } from '@app/modules/jobs/events/JobStartedEvent';

export class JobStartedHandler extends BaseEventHandler {
  handle(event: JobStartedEvent) {
    console.log(`Job started with pid ${event.pid}`);
  }
}
