import { BaseUserCaseService } from '@app/core/BaseUseCaseService';
import { CreateUserDuplicateEmailError } from '@app/modules/user/errors/CreateUserDuplicateEmailError';
import { UserCreatedEvent } from '@app/modules/user/events/UserCreatedEvent';
import { UserNotFound } from '../errors/UserNotFound';
import { User } from '../models/User';
import { ResetPasswordTokenCreatedEvent } from '../events/ResetPasswordTokenCreatedEvent';

export class ResetUserPasswordUseCase extends BaseUserCaseService {
  /**
   *
   * @param {UserRepository} userRepository
   * @param {EventDispatcher} eventDispatcher
   * @param {IMailService} mailService
   */
  constructor({ userRepository, eventDispatcher, mailService }) {
    super();
    this.userRepository = userRepository;
    this.eventDispatcher = eventDispatcher;
    this.mailService = mailService;
  }

  /**
   * @param {ResetUserPasswordDto} resetUserPasswordDto
   */
  execute(resetUserPasswordDto) {
    const { email } = resetUserPasswordDto;

    // const user = this.userRepository.findByEmail(email);
    // if (this.userRepository.findByEmail(email)) {
    //   throw new UserNotFound();
    // }

    // invalid user sign in
    // user.resetPassword();
    // use repo to create token to reset password
    const user = new User({ email });

    this.eventDispatcher.emit(new ResetPasswordTokenCreatedEvent(user));

    return true;
  }
}
