import { ioc } from '@app/providers/ioc';
import { CreateUserService } from "@app/api/modules/projects/services/CreateUserService";
import { UserRepository } from "@app/api/modules/projects/repository/UserRepository";
import eventDispatcher from "@app/api/modules/core/events/EventDispatcher";
import { ProjectService } from "@app/api/modules/projects/services/ProjectService";

ioc.bind('createUser', () => {
  return new CreateUserService(new UserRepository(), eventDispatcher)
});

ioc.bind('ProjectCRUD', () => {
  return new ProjectService(new UserRepository(), eventDispatcher)
});

export const ioc = ioc;