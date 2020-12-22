'use strict';

module.exports = (req, res, next) => {
    const error = new Error('La ruta no ha sido encontrada');
    error.status = 404;
    next(error);
};