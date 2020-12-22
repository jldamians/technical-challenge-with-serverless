'use strict';

const answer = {
    error(res, status, message, stack = undefined) {
        const response = {
            estado: status,
            mensaje: message,
        };

        if (stack) {
            response.stack = stack;
        }

        res.status(status).json(response);
    },
    
};

module.exports = answer;