'use strict';

const zxcvbn = require("zxcvbn");
const bcrypt = require("bcryptjs");

const PasswordIsNotStrong = require("./password-is-not-strong.error");
const VeryShortPassword = require("./very-short-password.error");

class UserPassword {
    constructor(pass='') {
        this.setPassword(pass);
    }

    setPassword(pass) {
        this.guardMinimumLength(pass);
        this.guardStrength(pass);
        this.password = pass;
    }

    guardMinimumLength(pass) {
        if (pass.length < 6) {
            throw new VeryShortPassword();
        }
    }

    guardStrength(pass) {
        const { score } = zxcvbn(pass);
        const isStrongPassword = score > 1; 

        if (!isStrongPassword) {
            throw new PasswordIsNotStrong();
        }
    }
}

module.exports = (pass) => {
    const newPassVo = new UserPassword(pass);

    return {
        value() {
            return newPassVo.password;
        },
        encrypt() {
            const salt= bcrypt.genSaltSync(10);
            const encrypted = bcrypt.hashSync(this.value(), salt);
            return encrypted;
        },
        compare(pass) {
            const check = bcrypt.compareSync(pass, this.value());
            return check;
        },
    }
};