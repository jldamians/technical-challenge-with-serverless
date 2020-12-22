'use strict';

class VehicleFinder {
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
     * Buscar vehículo
     * @param {number} id, identificador del vehículo
     * @return {Object}
     */
    async search(id) {
        return await this.repository.search(id);
    }
}

module.exports = VehicleFinder;