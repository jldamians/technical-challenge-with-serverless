'use strict';

class UserNotFound extends Error {
    constructor(email) {
        super(`El usuario no ha sido encontrado: ${email}`);
        this.name = 'UserNotFound';
        this.status = 404;
    }
}

module.exports = UserNotFound;