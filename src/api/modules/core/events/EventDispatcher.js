import { EventEmitter } from 'events';

export class EventDispatcher extends EventEmitter {
  /**
   *
   * @param {BaseEvent} event
   * @param {BaseEventHandler} handler
   */
  emit(event) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(super.emit(event.constructor.name, event));
      }, 0);
    });
  }

  /**
   * @param event
   * @param listener
   */
  on(event, listener) {
    super.on(event.name, e => {
      new listener().handle(e);
    });
  }
}
