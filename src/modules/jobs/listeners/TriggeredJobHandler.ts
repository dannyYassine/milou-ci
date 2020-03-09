import { BaseEventHandler } from '@app/core/listeners/BaseEventHandler';
import { TriggeredJobEvent } from '@app/modules/jobs/events/TriggeredJobEvent';
import { BuildJobUseCase } from '@app/modules/jobs/useCases/BuildJobUseCase';

export class TriggeredJobHandler extends BaseEventHandler {
  handle(event: TriggeredJobEvent) {
    this.ioc.use<BuildJobUseCase>(BuildJobUseCase).execute({
      jobId: event.jobId, // list of receivers
    });
  }
}
