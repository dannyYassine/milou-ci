import { IEvent } from '@app/core/events/IEvent';

export class JobFinishedEvent implements IEvent {
  private pid: number;

  public success: boolean;

  constructor(success: boolean, pid: number) {
    this.success = success;
    this.pid = pid;
  }

  getId(): string {
    return String(this.pid);
  }
}
