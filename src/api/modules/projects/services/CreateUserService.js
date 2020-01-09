import { BaseUserCaseService } from "@app/core/BaseUseCaseService";
import { CreateUserDuplicateEmailError} from "@app/api/modules/projects/errors/CreateUserDuplicateEmailError";
import {UserCreatedEvent} from "@app/api/modules/projects/events/UserCreatedEvent";

export class CreateUserService extends BaseUserCaseService {
  /**
   *
   * @param {UserRepository} userRepository
   * @param {EventDispatcher} eventDispatcher
   */
  constructor({userRepository, eventDispatcher}) {
    super();
    this.userRepository = userRepository;
    this.eventDispatcher = eventDispatcher;
  }

  /**
   * @param {CreateUserDto} createUserDto
   */
  execute(createUserDto) {
    const {email, username, password} = createUserDto;

    if (this.userRepository.findByEmail(email)) {
      throw new CreateUserDuplicateEmailError();
    }

    const user = this.userRepository.create(email, username, password);

    this.eventDispatcher.emit(new UserCreatedEvent(user.id));

    return user;
  }
}