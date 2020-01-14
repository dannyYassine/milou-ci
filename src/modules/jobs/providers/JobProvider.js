import { BaseProvider } from '@app/core/BaseProvider';
import { BuildJobUseCase } from '../useCases/BuildJobUseCase';
import { TriggeredJobEvent } from '../events/TriggeredJobEvent';
import { TriggeredJobHandler } from '../listeners/TriggeredJobHandler';
import { ProcessManager } from '@app/infra/processmanager/ProcessManager';
import { StopJobUseCase } from '../useCases/StopJobUseCase';
import { JobFinishedEvent } from '../events/JobFinishedEvent';
import { JobFinishedHandler } from '../listeners/JobFinishedHandler';
import { JobDataOutputedHandler } from '../listeners/JobDataOutputedHandler';
import { JobDataOutputedEvent } from '../events/JobDataOutputedEvent';
import { JobStartedEvent } from '../events/JobStartedEvent';
import { JobStartedHandler } from '../listeners/JobStartedHandler';

export class JobProvider extends BaseProvider {
  register() {
    this.ioc.bind('BuildJobUseCase', () => {
      return new BuildJobUseCase({
        processManager: new ProcessManager({
          eventDispatcher: this.ioc.use('eventDispatcher'),
        }),
      });
    });
    this.ioc.bind('StopJobUseCase', () => {
      return new StopJobUseCase({
        processManager: new ProcessManager({
          eventDispatcher: this.ioc.use('eventDispatcher'),
        }),
      });
    });
  }

  boot() {
    this.ioc
      .use('eventDispatcher')
      .handle(TriggeredJobEvent, TriggeredJobHandler)
      .handle(JobStartedEvent, JobStartedHandler)
      .handle(JobFinishedEvent, JobFinishedHandler)
      .handle(JobDataOutputedEvent, JobDataOutputedHandler);
  }
}
