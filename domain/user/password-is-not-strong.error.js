'use strict';

class PasswordIsNotStrong extends Error {
    constructor() {
        super(`La contraseña no es fuerte`);
        this.name = 'PasswordIsNotStrong';
        this.status = 400;
    }
}

module.exports = PasswordIsNotStrong;