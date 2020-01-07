import { BaseService } from '@app/api/utils/BaseService';
import { UserRepository } from '@app/api/modules/projects/repository/UserRepository';

export class ProjectService extends BaseService {

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