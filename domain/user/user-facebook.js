'use strict';

const WrongParameterValue = require("./wrong-parameter-value.error");

class UserFacebook {
    constructor(page='') {
        this.setFacebook(page);
    }

    setFacebook(page) {
        this.guard(page);
        this.facebook = page;
    }

    guard(page) {
        const regexp = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
        const isValidFacebookPage = regexp.test(page);

        if (!isValidFacebookPage) {
            throw new WrongParameterValue("Página Facebook");
        }
    }
}

module.exports = (page) => {
    const newFacebookVo = new UserFacebook(page);

    return {
        value() {
            return newFacebookVo.facebook;
        },
    }
};