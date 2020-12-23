'use strict';

const chai = require("chai");
const nock = require('nock');
const sinon = require('sinon');

const { initialize } = require("../server");
const middlewares = require("../middlewares");

chai.use(require("chai-http"));

describe('GET /vehicles - Ruta no encontrada', () => {
    let app;
        
	beforeEach(() => {
        app = initialize();
	});

    it('Siempre debe retornar estado 404', async () => {
        let res = await chai
            .request(app)
            .get('/unknown');
        
        chai.expect(res.status).to.equal(404);
        chai.expect(res.body.estado).to.equal(404);
        chai.expect(res.body.mensaje).to.equal('La ruta no ha sido encontrada');
    });
});

describe('GET /vehicles - Debe ingresar credenciales', () => {
    let app;

	beforeEach(() => {
        app = initialize();
	});

    it('Siempre debe retornar estado 401', async () => {
        let res = await chai
            .request(app)
            .get('/vehicles/1');
        
        chai.expect(res.status).to.equal(401);
        chai.expect(res.body.estado).to.equal(401);
        chai.expect(res.body.mensaje).to.equal('Debe ingresar sus credenciales (usuario y clave) para acceder al recurso');
    });
});

describe('GET /vehicles - Las credenciales son incorrectas', () => {
    let app;

	beforeEach(() => {
        app = initialize();
	});

    it('Siempre debe retornar estado 401', async () => {
        let res = await chai
            .request(app)
            .get('/vehicles/1')
            .auth('jldamians@hotmail.com.pe', '+-*123456+-*');
        
        chai.expect(res.status).to.equal(401);
        chai.expect(res.body.estado).to.equal(401);
        chai.expect(res.body.mensaje).to.equal('Las credenciales ingresadas son incorrectas');
    });
});

describe('GET /vehicles - Vehículo SI encontrado', () => {
    let app,
        isAuthorizedStub;
        
	beforeEach(() => {
        // mockeando respuesta
        nock('https://swapi.py4e.com')
            .get('/api/vehicles/1')
            .reply(200, {
                "name": "Sand Crawler", 
                "model": "Digger Crawler", 
                "manufacturer": "Corellia Mining Corporation", 
                "cost_in_credits": "150000", 
                "length": "36.8 ", 
                "max_atmosphering_speed": "30", 
                "crew": "46", 
                "passengers": "30", 
                "cargo_capacity": "50000", 
                "consumables": "2 months", 
                "vehicle_class": "wheeled", 
                "pilots": [], 
                "films": [
                    "https://swapi.py4e.com/api/films/1/", 
                    "https://swapi.py4e.com/api/films/5/"
                ], 
                "created": "2014-12-10T15:36:25.724000Z", 
                "edited": "2014-12-20T21:30:21.661000Z", 
                "url": "https://swapi.py4e.com/api/vehicles/4/"
            });

        // falseando el middleware de autorización
        isAuthorizedStub = sinon
            .stub(middlewares, 'isAuthorized')
            .callsFake((req, res, next) => { 
                next(); 
            });

        app = initialize();
	});

    it('Siempre debe retornar estado 200', async () => {
        let res = await chai
            .request(app)
            .get('/vehicles/1');

        chai.expect(res.status).to.equal(200);
    });

	afterEach(() => {
        isAuthorizedStub.restore();
	})
});

describe('GET /vehicles - Vehículo NO encontrado', () => {
    let app,
        isAuthorizedStub;
        
	beforeEach(() => {
        // mockeando respuesta
        nock('https://swapi.py4e.com')
            .get('/api/vehicles/2')
            .reply(404, {
                "detail": "Not found"
            });

        // falseando el middleware de autorización
        isAuthorizedStub = sinon
            .stub(middlewares, 'isAuthorized')
            .callsFake((req, res, next) => { 
                next(); 
            });

        app = initialize();
	});

    it('Siempre debe retornar estado 404', async () => {
        let res = await chai
            .request(app)
            .get('/vehicles/2');

        chai.expect(res.status).to.equal(404);
    });

	afterEach(() => {
        isAuthorizedStub.restore();
	})
});