const express = require('express');
const { UsersController } = require("../controllers");

const route = express.Router();
const controller = new UsersController();

route.get("/:email", (req, res, next) => {
    require("../middlewares").isAuthorized(req, res, next);
}, (req, res, next) => {
    controller.get(req, res, next);
});

route.post("/", (req, res, next) => {
    controller.post(req, res, next);
});

module.exports = route;