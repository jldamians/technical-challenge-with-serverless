'use strict';

const VeryShortName = require("./very-short-name.error");

class UserNames {
    constructor(names='') {
        this.setNames(names);
    }

    setNames(names) {
        this.guard(names);
        this.names = names;
    }

    guard(names) {
        const hasMinimumLength = names.length > 9;

        if (!hasMinimumLength) {
            throw new VeryShortName();
        }
    }
}

module.exports = (names) => {
    const newNamesVo = new UserNames(names);

    return {
        value() {
            return newNamesVo.names;
        },
    }
};