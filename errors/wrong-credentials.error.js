'use strict';

class WrongCredentials extends Error {
    constructor() {
        super('Las credenciales ingresadas son incorrectas');
        this.name = 'WrongCredentials';
        this.status = 401;
    }
}

module.exports = WrongCredentials;