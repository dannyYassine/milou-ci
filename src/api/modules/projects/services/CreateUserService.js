
class CreateUserDto {
  username;
  email;
  password;

  constructor({username, email, password}) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

class CreateUserDuplicateEmailError extends Error {
  constructor() {
    super();
    this.message = 'There is already an email.';
  }
}

class BaseUserCaseService {

  /**
   * @abstract
   * @param {*?} any
   */
  execute(any) {};
}

class CreateUserService extends BaseUserCaseService {

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
   *
   * @param {CreateUserDto} createUserDto
   */
  execute(createUserDto) {
    const {email, username, password} = createUserDto;

    if (this.userRepository.findByEmail(email)) {
      throw new CreateUserDuplicateEmailError();
    }

    const user = this.userRepository.create(email, username, password);

    this.eventDispatcher.emit(new CreateUserEvent(user.id));

    return user;
  }
}