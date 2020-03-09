import { BaseEventHandler } from '@app/core/listeners/BaseEventHandler';
import { JobStartedEvent } from '@app/modules/jobs/events/JobStartedEvent';
import { IHandler } from '@app/core/events/IHandler';

export class JobStartedHandler extends BaseEventHandler
  implements IHandler<JobStartedEvent> {
  handle(event: JobStartedEvent) {
    console.log(`Job started with pid ${event.pid}`);
  }
}
