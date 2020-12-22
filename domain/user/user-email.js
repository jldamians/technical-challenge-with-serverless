'use strict';

const WrongParameterValue = require("./wrong-parameter-value.error");

class UserEmail {
    constructor(email='') {
        this.setEmail(email);
    }

    setEmail(email) {
        this.guard(email);
        this.email = email;
    }

    guard(email) {
        const regexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        const isValidEmailFormat = regexp.test(email);

        if (!isValidEmailFormat) {
            throw new WrongParameterValue('Correo Electrónico');
        }
    }
}

module.exports = (email) => {
    const newEmailVo = new UserEmail(email);

    return {
        value() {
            return newEmailVo.email;
        },
    }
};