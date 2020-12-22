'use strict';

const { response } = require("./utils");
const { UserFinder, UserCreator, UserEmail, UserNames, UserPassword, UserFacebook, User } = require("./domain/user");
const { VehicleFinder } = require("./domain/vehicle");
const { UserRepository, VehicleRepository } = require("./repositories");

module.exports.greet = async event => {
  return response.ok({
    message: 'Bienvenido, soy Jose Damian!',
  });
};

module.exports.app = require("./server");