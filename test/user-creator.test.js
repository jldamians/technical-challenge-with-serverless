'use strict';

const { assert } = require('chai')

const { 
    CreatedUserRepository,
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
        const names = UserNames('Jose Luis Damian Saavedra');
        const email = UserEmail('jldamians@gmail.com');
        const password = UserPassword('+-*2020+-*');
        const facebook = UserFacebook('https://www.facebook.com/jldamians');
        const creator = new UserCreator(CreatedUserRepository);
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