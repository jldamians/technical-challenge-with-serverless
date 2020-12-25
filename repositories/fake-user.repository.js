'use strict';

const { User, UserNames, UserEmail, UserPassword, UserFacebook } = require("../domain/user");

const database = [{
    email: 'jldamians@hotmail.com',
    names: 'Jose Luis Damian Saavedra',
    password: '$2a$10$RfPRYOECGcOLG23ioRCHd.vj9.H0nJ/hnT.Tfd9wn1xRWHPUbU7Sq',
    facebook: 'https://www.facebook.com/jldamians',
}, /*{
    email: 'jadamians@hotmail.com',
    names: 'Jose Alberto Damian Saavedra',
    password: '$2a$10$cq/P22Morg07rwIqyiba9u1uNuVMOS/KEnqNbq66whtkjJ5JFuok2',
    facebook: 'https://www.facebook.com/jadamians',
}*/];

const respository = {
    /**
     * Buscar usuario por correo electrónico
     * @param {UserEmail} email, correo electrónico
     * @return {User | null}
     */
    async search(email) {
        const user = database.find((item) => {
            return item.email === email.value();
        });
        
        if (!user) {
            return null;
        }

        return Object.freeze(new User(
            UserNames(user.names),
            UserEmail(user.email),
            UserPassword(user.password),
            UserFacebook(user.facebook),
        ));
    },

    /**
     * Registrar usuario
     * @param {User} user 
     */
    async create(user) {
        const { names, email, password, facebook } = user;
        
        database.push({
            email: email.value(),
            password: password.encrypt(),
            names: names.value(),
            facebook: facebook.value(),
        });

        return user;
    },
};

module.exports = { ...respository };