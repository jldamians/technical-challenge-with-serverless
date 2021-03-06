const express = require('express');
const { VehiclesController } = require("../controllers");

const route = express.Router();
const controller = new VehiclesController();

route.get("/:id", (req, res, next) => {
    require("../middlewares").isAuthorized(req, res, next);
}, (req, res, next) => {
    controller.get(req, res, next);
});

module.exports = route;