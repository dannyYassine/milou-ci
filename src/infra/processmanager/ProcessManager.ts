import * as path from 'path';
import { ScriptRunner } from './ScriptRunner';
import { JobFinishedEvent } from '@app/modules/jobs/events/JobFinishedEvent';
import { JobDataOutputedEvent } from '@app/modules/jobs/events/JobDataOutputedEvent';
import { JobStartedEvent } from '@app/modules/jobs/events/JobStartedEvent';
import { IEventDispatcher } from '@app/core/events/IEventDispatcher';
import { Job } from '@app/modules/jobs/models/Job';

export class ProcessManager {
  public static scriptsPath: string = '/src/infra/processmanager/scripts';

  public runners: Map<number, ScriptRunner>;

  private eventDispatcher: IEventDispatcher;

  private cwd: string;

  constructor(eventDispatcher: IEventDispatcher) {
    this.eventDispatcher = eventDispatcher;
    this.cwd = path.join(path.resolve(), ProcessManager.scriptsPath);
    this.runners = new Map<number, ScriptRunner>();
  }

  async kill(pid: number) {
    try {
      process.kill(-pid);
      return true;
    } catch (e) {
      return false;
    }
  }

  executeScript(filename: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const runner = new ScriptRunner({
          filepath: `${this.cwd}/${filename}.sh`,
          options: {
            cwd: this.cwd,
            detached: true,
          },
        });
        runner.on('start', () => {
          this.eventDispatcher.emit(new JobStartedEvent(new Job(), runner.pid));
        });
        runner.on('data:out', ({ data }) => {
          this.eventDispatcher.emit(new JobDataOutputedEvent(runner.pid, data));
        });
        runner.on('data:err', ({ data }) => {
          this.eventDispatcher.emit(new JobDataOutputedEvent(runner.pid, data));
        });
        runner.on('exit', ({ code, signal, child }) => {
          if (code == 0) {
            this.eventDispatcher.emit(new JobFinishedEvent(true, child.pid));
          } else {
            this.eventDispatcher.emit(new JobFinishedEvent(false, child.pid));
          }
          this.runners.delete(runner.id);
        });

        this.runners.set(runner.id, runner);
        const pid = await runner.run();
        resolve(pid);
      } catch (e) {
        reject(e.message);
      }
    });
  }
}
