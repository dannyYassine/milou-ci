import { BaseProvider } from '@app/core/BaseProvider';
import { EventDispatcher } from '@app/core/events/EventDispatcher';

export class EventProvider extends BaseProvider {
  register() {
    this.ioc.singleton('eventDispatcher', () => {
      return new EventDispatcher();
    });
  }
}
