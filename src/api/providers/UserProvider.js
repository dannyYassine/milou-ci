import {BaseProvider} from "@app/api/providers/BaseProvider";
import { CreateUserService } from "@app/api/modules/projects/services/CreateUserService";
import { UserRepository } from "@app/api/modules/projects/repository/UserRepository";
import eventDispatcher from "@app/api/modules/core/events/EventDispatcher";
import { ProjectService } from "@app/api/modules/projects/services/ProjectService";

export class UserProvider extends BaseProvider {
  register() {
    this.ioc.bind('createUser', () => {
      return new CreateUserService(new UserRepository(), eventDispatcher)
    });
    this.ioc.bind('ProjectCRUD', () => {
      return new ProjectService(new UserRepository(), eventDispatcher)
    });
  }
}