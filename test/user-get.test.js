'use strict';

const chai = require("chai");
const { beforeEach } = require("mocha");

chai.use(require("chai-http"));

describe('GET /users', () => {
    let { app } = require('../server');

    it('Siempre debe retornar estado 404', async () => {
        let res = await chai.request(app).get('/unknown');
        
        chai.expect(res.status).to.equal(404);
        chai.expect(res.body.estado).to.equal(404);
        chai.expect(res.body.mensaje).to.equal('La ruta no ha sido encontrada');
    });

    it('Siempre debe retornar estado 401', async () => {
        let res = await chai.request(app).get('/users/jldamians@hotmail.com');
        
        chai.expect(res.status).to.equal(401);
        chai.expect(res.body.estado).to.equal(401);
        chai.expect(res.body.mensaje).to.equal('Debe ingresar sus credenciales (usuario y clave) para acceder al recurso');
    });

});