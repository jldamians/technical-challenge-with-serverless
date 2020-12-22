'use strict';

const { answer } = require("../utils");

module.exports = (error, req, res, next) => {
    const environment = process.env.NODE_ENV;
    let status;

    if (error.status) {
        status = error.status;
    } else {
        status = 500;
    }

    if (environment === 'production') {
        answer.error(res, status, error.message);
    } else {
        answer.error(res, status, error.message, error.stack);
    }
};