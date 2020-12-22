'use strict';

class UserRegister {
    constructor(repository = {}) {
        this.setRepository(repository);
    }

    setRepository(repository) {
        this.guard(repository);
        this.repository = repository;
    }
    
    guard(repository = {}) {
        const hasCreateMethod = repository.hasOwnProperty('create');

        if (!hasCreateMethod) {
            throw new Error('La implementación de repositorio de usuario no tiene el método de registro');
        }
    }

    /**
     * Registrar usuario
     * @param {User} user, usuario
     */
    async create(user) {
        return await this.repository.create(user);
    }
}

module.exports = UserRegister;