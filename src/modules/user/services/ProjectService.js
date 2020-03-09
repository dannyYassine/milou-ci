import { BaseService } from '@app/core/utils/BaseService';

export class ProjectService extends BaseService {
  constructor(userRepository, eventDispatcher) {
    super();
    this.userRepository = userRepository;
    this.eventDispatcher = eventDispatcher;
  }

  create() {}

  /**
   * @param {number?} id
   * @returns {User}
   */
  async read(id) {
    const user = await this.userRepository.findById(id);
    return user;
  }

  /**
   * @returns {Array.<User>}
   */
  async readAll() {
    const data = await this.userRepository.findAll();
    return data;
  }

  delete() {}

  update() {}
}
