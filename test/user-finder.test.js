'use strict';

const { assert } = require('chai')

const { 
    FoundUserRepository,
    NotFoundUserRepository,
} = require("../repositories");

const { 
    UserEmail,
    UserFinder,
} = require("../domain/user");

describe('Probando la búsqueda de usuario', () => {
    it('Debe retornar null si el usuario no es encontrado', async () => {
        const email = UserEmail('jldamians@gmail.com');
        const finder = new UserFinder(NotFoundUserRepository);
        const result = await finder.search(email);
        
        assert.isNull(result);
    });

    it('Debe retornar la información del usuario encontrado', async () => {
        const email = UserEmail('jldamians@gmail.com');
        const finder = new UserFinder(FoundUserRepository);
        const result = await finder.search(email);
        
        assert.isNotNull(result);
        assert.isObject(result);

        assert.property(result, 'names');
        assert.property(result, 'email');
        assert.property(result, 'password');
        assert.property(result, 'facebook');
    });
});