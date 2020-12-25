'use strict';

const { assert } = require('chai')

const { 
    FakeUserRepository,
} = require("../repositories");

const { 
    UserCreator,
    User,
    UserEmail,
    UserNames,
    UserPassword,
    UserFacebook,
} = require("../domain/user");

describe('Probando la creación de usuario', () => {
    it('Debe crear correctamente un usuario', async () => {
        const names = UserNames('Jose Alberto Damian Saavedra');
        const email = UserEmail('jadamians@hotmail.com');
        const password = UserPassword('+-*123456+-*');
        const facebook = UserFacebook('https://www.facebook.com/jadamians');
        const creator = new UserCreator(FakeUserRepository);
        const result = await creator.create(new User(
            names, email, password, facebook
        ));
        
        assert.isNotNull(result);
        assert.isObject(result);

        assert.property(result, 'names');
        assert.property(result, 'email');
        assert.property(result, 'password');
        assert.property(result, 'facebook');
    });
});