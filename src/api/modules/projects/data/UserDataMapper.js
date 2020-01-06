const { UserEntity } = require('../data/UserEntity');
const { User } = require('../models/User');

class BaseDataMapper {
    constructor(model, entity) {
        this.model = model;
        this.entity = entity;
    }

    toEntityValues(model) {
        return model;
    }

    convertToModel(data) {
        if (Array.isArray(data)) {
            return data.map(datum => {
                return this.toModel(datum);
            })
        }
        return this.toModel(data);
    }

    toModel(data) {
        return new this.model(data);
    }
}

class UserDataMapper extends BaseDataMapper {
    constructor() {
        super(User, UserEntity);
    }

    /**
     * @param {User} model 
     */
    toEntityValues(model) {
        return {
            id: model.id,
            first_name: model.firstName,
            last_name: model.lastName,
        }
    }

    /**
     * @override
     */
    toModel(data) {
        return new User({
            id: data.id,
            firstName: data.first_name,
            lastName: data.last_name,
        })
    }
}

module.exports = {
    UserDataMapper
}