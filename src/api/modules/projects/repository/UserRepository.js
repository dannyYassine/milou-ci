const { UserDataMapper } = require('../data/UserDataMapper');
const { UserEntity } = require('../data/UserEntity');

class RepositorySearchOptions {
    id;
    limit;
    where;
}

class BaseRepository {
    constructor(entity, dataMapper) {
        this.entity = entity;
        this.dataMapper = dataMapper;
    }

    async findById(id) {
        const data = await this.entity.findOne({
            where: {
                id: id
            }
        });
        return this._convert(data);
    }

    async findAll() {
        const data = await this.entity.findAll();
        return this._convert(data)
    }

    /**
     * 
     * @param {RepositorySearchOptions} options 
     */
    async find(options = new RepositorySearchOptions()) {
        const data = await this.entity.findAll(options);
        return this._convert(data)
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
        return data ? this.dataMapper.convertToModel(data): null;
    }
}

class UserRepository extends BaseReposiory {
    constructor() {
        super(UserEntity, new UserDataMapper());
    }

    /**
     * @param {string} username
     * @param {string} email
     * @param {string} password
     * @returns {Promise<User>}
     */
    async create(username, email, password) {
        const user = UserEntity.create({username, email, password});
        return this.dataMapper.convertToModel(user);
    }

    /**
     * @param {string} email
     * @returns {Promise<User?>}
     */
    async findByEmail(email) {
        const data = await this.entity.findOne({
            where: {
                email: email
            }
        });
        return this._convert(data);
    }
}

module.exports = {
    UserRepository
};