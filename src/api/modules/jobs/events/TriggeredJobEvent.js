import { BaseEvent } from '@app/api/modules/core/events/BaseEvent'

export class TriggeredJobEvent extends BaseEvent {
  constructor(jobId) {
    super()
    this.jobId = jobId
  }
}
