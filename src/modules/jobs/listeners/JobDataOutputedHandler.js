import { BaseEventHandler } from '@app/core/listeners/BaseEventHandler';

export class JobDataOutputedHandler extends BaseEventHandler {
  /**
   *
   * @param {JobDataOutputedEvent} event
   */
  handle(event) {
    console.log(event.data.toString('ascii'));
  }
}
