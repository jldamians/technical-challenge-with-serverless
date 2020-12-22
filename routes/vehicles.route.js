const express = require('express');
const { VehiclesController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

const route = express.Router();
const controller = new VehiclesController();

route.get("/:id", isAuthorized, (req, res, next) => {
    controller.get(req, res, next);
});

module.exports = route;