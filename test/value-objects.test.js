'use strict';

const { assert } = require('chai')

const { 
    UserNames,
    UserEmail,
    UserPassword,
    UserFacebook,
} = require("../domain/user");

describe('Probando el "value object" de contraseña', () => {
    it('Lanzar error si la contraseña es corta', async () => {
        assert.throws(() => {
            UserPassword('123');
        });
    });
    it('Lanzar error si la contraseña es débil', async () => {
        assert.throws(() => {
            UserPassword('123456');
        });
    });
    it('La contraseña debe ser fuerte', async () => {
        assert.doesNotThrow(() => {
            UserPassword('+-*123456+-*');
        });
    });
});

describe('Probando el "value object" de correo electrónico', () => {
    it('El formato del correo debe ser correcto', async () => {
        assert.doesNotThrow(() => {
            UserEmail('jldamians@hotmail.com');
        });
    });
    it('Lanzar error si el correo no tiene @', async () => {
        assert.throws(() => {
            UserEmail('jldamians.hotmail.com');
        });
    });
    it('Lanzar error si el correo no tiene dominio', async () => {
        assert.throws(() => {
            UserEmail('jldamians');
        });
    });
});

describe('Probando el "value object" de facebook', () => {
    it('El formato de la página de facebook debe ser correcto', async () => {
        assert.doesNotThrow(() => {
            UserFacebook('www.facebook.com/jldamians');
            UserFacebook('http://www.facebook.com/jldamians');
            UserFacebook('https://www.facebook.com/jldamians');
        });
    });
    it('Lanzar error si el formato de la página de facebook es incorrecto', async () => {
        assert.throws(() => {
            UserFacebook('www.facebook.com');
        });
    });
});

describe('Probando el "value object" de nombres', () => {
    it('El formato del nombre deber ser correcto', async () => {
        assert.doesNotThrow(() => {
            UserNames('Jose Luis Damian Saavedra');
        });
    });
    it('Lanzar error si el formato del nombre es incorrecto', async () => {
        assert.throws(() => {
            UserNames('Jose');
        });
    });
});