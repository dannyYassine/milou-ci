const { BlockOperation, Operation } = require('operationkit');
const { BaseService } = require('./../../../utils/BaseService');
const { UserRepository } = require('./../repository/UserRepository');

class ProjectService extends BaseService {

    constructor() {
        super();
        this.userRepository = new UserRepository();
    }

    create() {
        
    }

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

    delete() {

    }

    update() {

    }
}

module.exports = {
    ProjectService
}

class ReadOperation extends Operation {

    run() {
        return Promise.resolve([]);
    }
}