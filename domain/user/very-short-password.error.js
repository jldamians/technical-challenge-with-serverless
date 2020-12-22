'use strict';

class VeryShortPassword extends Error {
    constructor() {
        super('La contraseña debe tener como mínimo 6 caracteres');
        this.name = 'VeryShortPassword';
        this.status = 400;
    }
}

module.exports = VeryShortPassword;