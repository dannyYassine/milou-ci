import { BaseProvider } from '@app/api/providers/BaseProvider'
import { BuildJobUseCase } from '../useCases/BuildJobUseCase'
import { TriggeredJobEvent } from '../events/TriggeredJobEvent'
import { TriggeredJobHandler } from '../listeners/TriggeredJobHandler'

export class JobProvider extends BaseProvider {
  register() {
    this.ioc.bind('BuildJobUseCase', () => {
      return new BuildJobUseCase()
    })
  }

  boot() {
    this.ioc.use('eventDispatcher').on(TriggeredJobEvent, TriggeredJobHandler)
  }
}
