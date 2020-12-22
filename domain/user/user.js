'use strict';

class User {
    /**
     * constructor
     * @param {UserNames} names, nombres completos
     * @param {UserEmail} email, correo electrónico
     * @param {UserPassword} password, contraseña segura
     * @param {UserFacebook} facebook, página de facebook
     */
    constructor(names, email, password, facebook) {
        this.names = names;
        this.email = email;
        this.password = password;
        this.facebook = facebook;
    }
}

module.exports = User;