import * as uuidv4 from 'uuid/v4';
import { ioc, IOC } from '@app/core/ioc';
import { EventDispatcher } from '@app/core/events/EventDispatcher';
import { IEventDispatcher } from '../events/IEventDispatcher';

export class BaseEventHandler {
  private _id: string;

  protected ioc: IOC;

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
      .use<IEventDispatcher>(EventDispatcher)
      .on(event, method ? method.bind(this) : this.handle.bind(this));
  }

  /**
   * @param {BaseEvent} e
   */
  handle(e) {}
}
