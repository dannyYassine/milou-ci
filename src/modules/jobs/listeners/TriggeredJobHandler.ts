import { BaseEventHandler } from '@app/core/listeners/BaseEventHandler';
import { TriggeredJobEvent } from '@app/modules/jobs/events/TriggeredJobEvent';

export class TriggeredJobHandler extends BaseEventHandler {
  handle(event: TriggeredJobEvent) {
    this.ioc.use('BuildJobUseCase').execute({
      jobId: event.jobId, // list of receivers
    });
  }
}
