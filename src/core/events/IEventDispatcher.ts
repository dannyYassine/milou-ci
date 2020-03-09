import { IEvent } from '@app/core/events/IEvent';
import { IHandler } from '@app/core/events/IHandler';

export interface IEventDispatcher {
  emit(event: IEvent): void;
  on(event: IEvent, handler: Function): void;
  handle(event: string, handler: IHandler<IEvent>): IEventDispatcher;
}
