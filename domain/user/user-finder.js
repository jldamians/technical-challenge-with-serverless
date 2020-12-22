'use strict';

class UserFinder {
    constructor(repository = {}) {
        this.setRepository(repository);
    }

    setRepository(repository) {
        this.guard(repository);
        this.repository = repository;
    }
    
    guard(repository = {}) {
        const hasSearchMethod = repository.hasOwnProperty('search');

        if (!hasSearchMethod) {
            throw new Error('La implementación de repositorio de usuario no tiene el método de búsqueda');
        }
    }

    /**
     * Buscar usuario
     * @param {UserEmail} email, correo electrónico
     * @return {User}
     */
    async search(email) {
        return await this.repository.search(email);
    }
}

module.exports = UserFinder;