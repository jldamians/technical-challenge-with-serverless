'use strict';

class WrongParameterValue extends Error {
    constructor(parameter) {
        super(`El valor del parámetro ${parameter} es incorrecto`);
        this.name = 'WrongParameterValue';
        this.status = 400;
    }
}

module.exports = WrongParameterValue;