'use strict';

class EmailAlreadyRegistered extends Error {
    constructor(email) {
        super(`El correo electrónico ya ha sido registrado: ${email}`);
        this.name = 'EmailAlreadyRegistered';
        this.status = 409;
    }
}

module.exports = EmailAlreadyRegistered;