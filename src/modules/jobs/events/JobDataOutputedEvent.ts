import { BaseEvent } from '@app/core/events/BaseEvent';

export class JobDataOutputedEvent extends BaseEvent {
  public pid: number;

  public data: Buffer;

  constructor(pid: number, data: Buffer) {
    super();
    this.data = data;
    this.pid = pid;
  }
}
