'use strict';

const axios = require("axios");

const repository = {
    /**
     * Buscar vehículo por identificador
     * @param {number} id, identificador
     * @return {object | null}
     */
    async search(id) {
        try {
            const { data, status } = await axios.get(`https://swapi.py4e.com/api/vehicles/${id}`);
            
            if (status !== 200) {
                return null;
            }

            return Object.freeze({
                nombre: data.name,
                modelo: data.model,
                fabricante: data.manufacturer,
                costo_en_credito: data.cost_in_credit,
                longitud: parseInt(data.length),
                velocidad_maxima_de_atmosfera: parseInt(data.max_atmosphering_speed),
                tripulacion: parseInt(data.crew),
                pasajeros: parseInt(data.passengers),
                capacidad_de_carga: parseInt(data.cargo_capacity),
                consumibles: data.consumables,
                clase_de_vehiculo: data.vehicle_class,
                peliculas: data.films,
            });
        } catch (error) {
            return null;
        }
    }
};

module.exports = { ...repository };
