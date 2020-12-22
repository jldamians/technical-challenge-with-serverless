'use strict';

const { 
    User,
    UserNames,
    UserEmail,
    UserPassword,
    UserFacebook,
} = require("../domain/user");

const repository = {
    /**
     * Buscar usuario por correo electrónico
     * @param {UserEmail} email, correo electrónico
     * @return {User | null}
     */
    async search(email) {
        return new User(
            UserNames('Jose Luis Damian Saavedra'),
            UserEmail('jldamians@gmail.com'),
            UserPassword('$2a$10$kzrdT92d5n86xprw6dZsdun2EY.8j7OkbV/B8Zefz74JzjMf2BEx.'),
            UserFacebook('https://www.facebook.com/jldamians'),
        );
    }
};

module.exports = { ...repository };
