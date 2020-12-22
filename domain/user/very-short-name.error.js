'use strict';

class VeryShortName extends Error {
    constructor() {
        super('El nombre debe tener como mínimo 10 caracteres');
        this.name = 'VeryShortName';
        this.status = 400;
    }
}

module.exports = VeryShortName;