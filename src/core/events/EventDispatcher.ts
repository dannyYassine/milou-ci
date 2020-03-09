import { EventEmitter } from 'events';
import { IEvent } from './IEvent';
import { IHandler } from './IHandler';

export class EventDispatcher {
  private eventEmitter: EventEmitter;

  constructor() {
    this.eventEmitter = new EventEmitter();
  }

  emit(event: IEvent) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.eventEmitter.emit(event.constructor.name, event));
      }, 0);
    });

    return this;
  }

  /**
   * @param event
   * @param listener
   */
  on(event, listener) {
    this.eventEmitter.on(event.name, e => {
      listener(e);
    });

    return this;
  }

  /**
   * @param event
   * @param listener
   */
  handle(event: IEvent, handler: IHandler<IEvent>) {
    this.eventEmitter.on(String(event), (e: IEvent) => {
      handler.handle(e);
    });

    return this;
  }
}
