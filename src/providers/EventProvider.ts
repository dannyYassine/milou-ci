import { BaseProvider } from '@app/core/BaseProvider';
import { IEventDispatcher } from '@app/core/events/IEventDispatcher';
import { EventDispatcher } from '@app/core/events/EventDispatcher';

export class EventProvider extends BaseProvider {
  register() {
    this.ioc.singleton<IEventDispatcher>(EventDispatcher, () => {
      return new EventDispatcher();
    });
  }
}
