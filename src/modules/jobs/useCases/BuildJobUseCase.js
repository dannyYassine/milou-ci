import { BaseUserCaseService } from '@app/core/BaseUseCaseService';
import { ProcessManager } from '@app/infra/processmanager/ProcessManager';

export class BuildJobUseCase extends BaseUserCaseService {
  constructor({ processManager }) {
    super();
    this.processManager = processManager;
  }

  async execute({ jobId }) {
    const pid = await this.processManager.executeScript('test');

    console.log(pid);

    return pid;
  }
}
