import { BaseEventHandler } from '@app/core/listeners/BaseEventHandler';

export class JobStartedHandler extends BaseEventHandler {
  /**
   *
   * @param {JobStartedEvent} event
   */
  handle(event) {
    console.log(`Job started with pid ${event.pid}`);
  }
}
