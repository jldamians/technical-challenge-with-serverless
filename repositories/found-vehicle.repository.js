'use strict';

const repository = {
    /**
     * Buscar vehículo por identificador
     * @param {number} id, identificador
     * @return {object | null}
     */
    async search(id) {
        return Object.freeze({
            nombre: 'Sand Crawler',
            modelo: 'Digger Crawler',
            fabricante: 'Corellia Mining Corporation',
            longitud: 36,
            velocidad_maxima_de_atmosfera: 30,
            tripulacion: 46,
            pasajeros: 30,
            capacidad_de_carga: 50000,
            consumibles: '2 months',
            clase_de_vehiculo: 'wheeled',
            peliculas: [
                'https://swapi.py4e.com/api/films/1/',
                'https://swapi.py4e.com/api/films/5/'
            ],
        });
    }
};

module.exports = { ...repository };
