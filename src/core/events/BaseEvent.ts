import * as uuidv4 from 'uuid/v4';
import { IEvent } from '@app/core/events/IEvent';

export class BaseEvent implements IEvent {
  private id: string;

  constructor() {
    this.id = uuidv4();
  }

  name(): string {
    return '';
  }

  getId(): string {
    return this.id;
  }
}
