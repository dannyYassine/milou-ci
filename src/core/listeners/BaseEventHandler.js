import * as uuidv4 from 'uuid/v4';
import { ioc } from '@app/core/ioc';

export class BaseEventHandler {
  constructor() {
    this._id = uuidv4();
    this.ioc = ioc;
    this.addSubscriptions();
  }

  /**
   * @abstract
   */
  addSubscriptions() {}

  /**
   * @param {BaseEvent} event
   * @param {Function} method
   */
  subscribeTo(event, method = null) {
    this.ioc
      .use('eventDispatcher')
      .on(event, method ? method.bind(this) : this.handle.bind(this));
  }

  /**
   * @param {BaseEvent} e
   */
  handle(e) {}
}
