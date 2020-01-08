import uuidv4 from 'uuid/v4';
import {ioc} from '@app/api/providers/ioc';

export class BaseEventHandler {
  constructor() {
    this._id = uuidv4();
    this.ioc = ioc;
  }

  /**
   * @param {BaseEvent} e
   */
  handle(e) {}
}