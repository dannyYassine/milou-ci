import { IEvent } from '@app/core/events/IEvent';

export interface IEventDispatcher {
  emit(event: IEvent): void;
}
