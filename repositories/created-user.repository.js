'use strict';

const repository = {
    /**
     * Registrar usuario
     * @param {User} user 
     */
    async create(user) {
        return user;
    }
};

module.exports = { ...repository };
