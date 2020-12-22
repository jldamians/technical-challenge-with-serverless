'use strict';

const { response } = require("./utils");

module.exports.greet = async event => {
  return response.ok({
    message: 'Bienvenido, soy Jose Damian!',
  });
};