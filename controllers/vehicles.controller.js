'use strict';

const { VehicleFinder } = require("../domain/vehicle");
const { VehicleNotFound } = require("../errors");
const { VehicleRepository } = require("../repositories");

const finder = new VehicleFinder(VehicleRepository);

class VehiclesController {
    async get(req, res, next) {
        const { id } = req.params;

        try {
            const vehicle = await finder.search(id);

            if (!vehicle) {
                return next(new VehicleNotFound(id));
            }
            
            res.status(200).json({
                ...vehicle,
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = VehiclesController;