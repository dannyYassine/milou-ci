import {EventEmitter} from "events";

export class EventDispatcher extends EventEmitter {

  /**
   *
   * @param {BaseEvent} event
   * @param {BaseEventHandler} handler
   */
  emit(event) {
    return super.emit(event.constructor.name, event);
  }

  /**
   * @param event
   * @param listener
   */
  on(event, listener) {
    super.on(event.name, (e) => {
      new listener().handle(e);
    });
  }
}