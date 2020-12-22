'use strict';

class VehicleNotFound extends Error {
    constructor(email) {
        super(`El vehículo no ha sido encontrado: ${email}`);
        this.name = 'VehicleNotFound';
        this.status = 404;
    }
}

module.exports = VehicleNotFound;