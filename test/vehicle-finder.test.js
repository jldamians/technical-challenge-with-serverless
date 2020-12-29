'use strict';

const { assert } = require('chai')

const { 
    FakeVehicleRepository,
} = require("../repositories");
const { VehicleFinder } = require("../domain/vehicle");

describe('Probando la búsqueda de vehículo', () => {
    it('Debe retornar null si el vehículo no es encontrado', async () => {
        const vehicleid = 1;
        const finder = new VehicleFinder(FakeVehicleRepository);
        const result = await finder.search(vehicleid);
        
        assert.isNull(result);
    });

    it('Debe retornar la información del vehículo encontrado', async () => {
        const vehicleid = 4;
        const finder = new VehicleFinder(FakeVehicleRepository);
        const result = await finder.search(vehicleid);
        
        assert.isNotNull(result);
        assert.isObject(result);

        assert.property(result, 'nombre');
        assert.property(result, 'modelo');
        assert.property(result, 'fabricante');
        assert.property(result, 'longitud');
        assert.property(result, 'velocidad_maxima_de_atmosfera');
        assert.property(result, 'tripulacion');
        assert.property(result, 'pasajeros');
        assert.property(result, 'capacidad_de_carga');
        assert.property(result, 'consumibles');
        assert.property(result, 'clase_de_vehiculo');
        assert.property(result, 'peliculas');
    });
});