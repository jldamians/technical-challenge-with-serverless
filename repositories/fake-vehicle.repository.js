'use strict';

const database = {
    4: {
        name: "Sand Crawler", 
        model: "Digger Crawler", 
        manufacturer: "Corellia Mining Corporation", 
        cost_in_credits: "150000", 
        length: "36.8 ", 
        max_atmosphering_speed: "30", 
        crew: "46", 
        passengers: "30", 
        cargo_capacity: "50000", 
        consumables: "2 months", 
        vehicle_class: "wheeled", 
        pilots: [], 
        films: [
            "https://swapi.py4e.com/api/films/1/", 
            "https://swapi.py4e.com/api/films/5/"
        ], 
        created: "2014-12-10T15:36:25.724000Z", 
        edited: "2014-12-20T21:30:21.661000Z", 
        url: "https://swapi.py4e.com/api/vehicles/4/",
    },
};

const repository = {
    /**
     * Buscar vehículo por identificador
     * @param {number} id, identificador
     * @return {object | null}
     */
    async search(id) {
        const vehicle = database[id];

        if (!vehicle) {
            return null;
        }

        return Object.freeze({
            nombre: vehicle.name,
            modelo: vehicle.model,
            fabricante: vehicle.manufacturer,
            costo_en_credito: vehicle.cost_in_credit,
            longitud: parseInt(vehicle.length),
            velocidad_maxima_de_atmosfera: parseInt(vehicle.max_atmosphering_speed),
            tripulacion: parseInt(vehicle.crew),
            pasajeros: parseInt(vehicle.passengers),
            capacidad_de_carga: parseInt(vehicle.cargo_capacity),
            consumibles: vehicle.consumables,
            clase_de_vehiculo: vehicle.vehicle_class,
            peliculas: vehicle.films,
        });
    }
};

module.exports = { ...repository };