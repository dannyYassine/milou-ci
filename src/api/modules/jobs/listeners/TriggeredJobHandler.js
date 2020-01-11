import { BaseEventHandler } from '@app/api/listeners/BaseEventHandler'

export class TriggeredJobHandler extends BaseEventHandler {
  /**
   *
   * @param {TriggeredJobEvent} event
   */
  handle(event) {
    this.ioc.use('BuildJobUseCase').execute({
      jobId: event.jobId, // list of receivers
    })
  }
}
