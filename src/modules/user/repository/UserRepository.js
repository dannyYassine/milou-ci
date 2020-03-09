import { UserDataMapper } from '@app/modules/user/data/UserDataMapper';
import { UserEntity } from '@app/modules/user/data/UserEntity';
import { BaseRepository } from '@app/core/repos/BaseRepository';

export class UserRepository extends BaseRepository {
  constructor(transaction) {
    super(UserEntity, new UserDataMapper(), transaction);
  }

  /**
   * @param {string} username
   * @param {string} email
   * @param {string} password
   * @returns {Promise<User>}
   */
  async create(username, email, password) {
    const user = UserEntity.create({ username, email, password });
    return this.dataMapper.convertToModel(user);
  }

  /**
   * @param {string} email
   * @returns {Promise<User?>}
   */
  async findByEmail(email) {
    const data = await this.entity.findOne({
      where: {
        email: email,
      },
    });
    return this._convert(data);
  }
}
