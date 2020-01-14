import { spawn } from 'child_process';
import { EventEmitter } from 'events';
import uuid from 'uuid/v4';

export class ScriptRunner extends EventEmitter {
  constructor({ filepath, options }) {
    super();
    this.id = uuid();
    this.filepath = filepath;
    this.options = options;
    this.pid = null;
    this.didStart = false;
  }

  run() {
    return new Promise((resolve, reject) => {
      const child = spawn('sh', [this.filepath], this.options);

      this.pid = child.pid;
      resolve(this.pid);

      child.stdout.on('data', data => {
        if (!this.didStart) {
          this.didStart = true;
          this.emit('start');
        }
        this.emit('data:out', { data });
      });

      child.stderr.on('data', data => {
        if (!this.didStart) {
          this.didStart = true;
          this.emit('start');
        }
        this.emit('data:err', { data });
      });

      child.on('exit', (code, signal) => {
        this.emit('exit', { child, code, signal });
      });
    });
  }
}
