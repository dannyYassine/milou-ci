import {BaseProvider} from "@app/api/providers/BaseProvider";
import {EventDispatcher} from "@app/api/modules/core/events/EventDispatcher";

export class EventProvider extends BaseProvider {
  register() {
    this.ioc.singleton('eventDispatcher', () => {
      return new EventDispatcher();
    });
  }
}