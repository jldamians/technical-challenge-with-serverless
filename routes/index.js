'use strict';

const express = require('express');

const route = express.Router();

route.use("/users", require("./users.route"));
route.use("/vehicles", require("./vehicles.route"));

module.exports = route;