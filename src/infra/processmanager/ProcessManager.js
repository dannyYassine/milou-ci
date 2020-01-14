import path from 'path';
import fs from 'fs';
import { ScriptRunner } from './ScriptRunner';
import { JobFinishedEvent } from '@app/modules/jobs/events/JobFinishedEvent';
import { JobDataOutputedEvent } from '@app/modules/jobs/events/JobDataOutputedEvent';
import { JobStartedEvent } from '@app/modules/jobs/events/JobStartedEvent';

export class ProcessManager {
  /**
   * Location of project scripts
   */
  static scriptsPath = '/src/infra/processmanager/scripts';

  /**
   * Map<number, ScriptRunner>
   */
  runners;

  constructor({ eventDispatcher }) {
    this.eventDispatcher = eventDispatcher;
    this.cwd = path.join(path.resolve(), ProcessManager.scriptsPath);
    this.runners = new Map();
  }

  /**
   * @param {string|number} pid
   */
  async kill(pid) {
    try {
      process.kill(-pid);
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   *
   * @param {string} filename
   */
  executeScript(filename) {
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
          this.eventDispatcher.emit(
            new JobStartedEvent({ job: {}, pid: runner.pid })
          );
        });
        runner.on('data:out', ({ data }) => {
          this.eventDispatcher.emit(
            new JobDataOutputedEvent({ pid: runner.pid, data })
          );
        });
        runner.on('data:err', ({ data }) => {
          this.eventDispatcher.emit(
            new JobDataOutputedEvent({ pid: runner.pid, data })
          );
        });
        runner.on('exit', ({ code, signal, child }) => {
          if (code == 0) {
            this.eventDispatcher.emit(
              new JobFinishedEvent({ success: true, pid: child.pid })
            );
          } else {
            this.eventDispatcher.emit(
              new JobFinishedEvent({ success: false, pid: child.pid })
            );
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
