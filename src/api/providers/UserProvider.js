import {BaseProvider} from "@app/api/providers/BaseProvider";
import { CreateUserService } from "@app/api/modules/projects/services/CreateUserService";
import { UserRepository } from "@app/api/modules/projects/repository/UserRepository";
import { ProjectService } from "@app/api/modules/projects/services/ProjectService";
import {UserCreatedEvent} from "../modules/projects/events/UserCreatedEvent";
import {UserCreated} from "../listeners/UserCreated";

export class UserProvider extends BaseProvider {
  register() {
    this.ioc.bind('createUser', () => {
      return new CreateUserService({
        userRepository: new UserRepository(),
        eventDispatcher: this.ioc.use('eventDispatcher')
      })
    });
    this.ioc.bind('ProjectCRUD', () => {
      return new ProjectService(new UserRepository(), this.ioc.use('eventDispatcher'))
    });
  }

  boot() {
    this.ioc.use('eventDispatcher').on(UserCreatedEvent, UserCreated)
  }
}