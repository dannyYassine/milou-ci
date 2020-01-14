import { RepositorySearchOptions } from '@app/core/RepositorySearchOptions';
import { TransactionService } from '@app/infra/database/TransactionService';

export class BaseRepository {
  constructor(
    entity,
    dataMapper,
    transactionService = new TransactionService()
  ) {
    this.entity = entity;
    this.dataMapper = dataMapper;
    this.transactionService = transactionService;
  }

  async getTransaction() {
    return this.transactionService.getTransaction();
  }

  async findById(id) {
    const data = await this.entity.findOne({
      where: {
        id: id,
      },
    });
    return this._convert(data);
  }

  async findAll() {
    const data = await this.entity.findAll();
    return this._convert(data);
  }

  /**
   *
   * @param {RepositorySearchOptions} options
   */
  async find(options = new RepositorySearchOptions()) {
    const data = await this.entity.findAll(options);
    return this._convert(data);
  }

  /**
   *
   * @param {RepositorySearchOptions?} options
   */
  async delete(options = new RepositorySearchOptions()) {
    const affectedEntitiesCount = await this.entity.destroy(options);
    return affectedEntitiesCount;
  }

  _convert(data) {
    return data ? this.dataMapper.convertToModel(data) : null;
  }
}
