import { BaseProvider } from '@app/core/BaseProvider';
import { BuildJobUseCase } from '@app/modules/jobs/useCases/BuildJobUseCase';
import { TriggeredJobEvent } from '@app/modules/jobs/events/TriggeredJobEvent';
import { TriggeredJobHandler } from '@app/modules/jobs/listeners/TriggeredJobHandler';
import { ProcessManager } from '@app/infra/processmanager/ProcessManager';
import { StopJobUseCase } from '@app/modules/jobs/useCases/StopJobUseCase';
import { JobFinishedEvent } from '@app/modules/jobs/events/JobFinishedEvent';
import { JobFinishedHandler } from '@app/modules/jobs/listeners/JobFinishedHandler';
import { JobDataOutputedHandler } from '@app/modules/jobs/listeners/JobDataOutputedHandler';
import { JobDataOutputedEvent } from '@app/modules/jobs/events/JobDataOutputedEvent';
import { JobStartedEvent } from '@app/modules/jobs/events/JobStartedEvent';
import { JobStartedHandler } from '@app/modules/jobs/listeners/JobStartedHandler';
import { EventDispatcher } from '@app/core/events/EventDispatcher';
import { IEventDispatcher } from '../core/events/IEventDispatcher';

export class JobProvider extends BaseProvider {
  register() {
    this.ioc.bind<BuildJobUseCase>('BuildJobUseCase', () => {
      return new BuildJobUseCase({
        processManager: new ProcessManager(
          this.ioc.use<EventDispatcher>('eventDispatcher')
        ),
      });
    });
    this.ioc.bind<StopJobUseCase>('StopJobUseCase', () => {
      return new StopJobUseCase({
        processManager: new ProcessManager(
          this.ioc.use<IEventDispatcher>('eventDispatcher')
        ),
      });
    });
  }

  boot() {
    this.ioc
      .use<IEventDispatcher>(EventDispatcher)
      .handle(TriggeredJobEvent.name, new TriggeredJobHandler())
      .handle(JobStartedEvent.name, new JobStartedHandler())
      .handle(JobFinishedEvent.name, new JobFinishedHandler())
      .handle(JobDataOutputedEvent.name, new JobDataOutputedHandler());
  }
}
