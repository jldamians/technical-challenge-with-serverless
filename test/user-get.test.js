'use strict';

const chai = require("chai");
const nock = require('nock');
const sinon = require('sinon');

const { initialize } = require("../server");
const middlewares = require("../middlewares");

chai.use(require("chai-http"));

describe('GET /users - Ruta no encontrada', () => {
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

describe('GET /users - Debe ingresar credenciales', () => {
    let app;

    beforeEach(() => {
        app = initialize();
    });

    it('Siempre debe retornar estado 401', async () => {
        let res = await chai
            .request(app)
            .get('/users/jldamians@hotmail.com');
        
        chai.expect(res.status).to.equal(401);
        chai.expect(res.body.estado).to.equal(401);
        chai.expect(res.body.mensaje).to.equal('Debe ingresar sus credenciales (usuario y clave) para acceder al recurso');
    });
});

describe('GET /users - Las credenciales son incorrectas', () => {
    let app;

	beforeEach(() => {
        app = initialize();
	});

    it('Siempre debe retornar estado 401', async () => {
        let res = await chai
            .request(app)
            .get('/users/jldamians@hotmail.com')
            .auth('jldamians@hotmail.com.pe', '+-*123456+-*');
        
        chai.expect(res.status).to.equal(401);
        chai.expect(res.body.estado).to.equal(401);
        chai.expect(res.body.mensaje).to.equal('Las credenciales ingresadas son incorrectas');
    });
});