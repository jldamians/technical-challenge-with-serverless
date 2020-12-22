'use strict';

const response = {
    general(status, results) {
        return {
            statusCode: status,
            headers: {
                "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify({
                resultado: results,
            }),
        }
    },
    error(status, message) {
        return {
            statusCode: status,
            headers: {
                "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify({
                mensaje: message,
            }),
        };
    },
    ok(results) {
        return this.general(200, results);
    },
    badRequest(message) {
        return this.error(400, message);
    },
    notFound(message) {
        return this.error(404, message);
    },
    
};

module.exports = response;