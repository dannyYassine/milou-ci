import { sequelize } from '@app/infra/database';

export class TransactionService {
  constructor(transaction = null) {
    this.transaction = transaction;
  }

  async getTransaction() {
    if (!this.transaction) {
      this.transaction = await sequelize.transaction();
    }
    return this.transaction;
  }
}
