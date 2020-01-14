import { BaseUserCaseService } from '@app/core/BaseUseCaseService';
import { NoJobFoundError } from '@app/modules/jobs/errors/NoJobFoundError';

export class StopJobUseCase extends BaseUserCaseService {
  constructor({ processManager }) {
    super();
    this.processManager = processManager;
  }
  async execute(pid) {
    const result = await this.processManager.kill(pid);

    if (!result) {
      throw new NoJobFoundError(pid);
    }

    return true;
  }
}
