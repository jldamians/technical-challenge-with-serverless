'use strict';

class CredentialsNotEntered extends Error {
    constructor() {
        super('Debe ingresar sus credenciales (usuario y clave) para acceder al recurso');
        this.name = 'CredentialsNotEntered';
        this.status = 401;
    }
}

module.exports = CredentialsNotEntered;