'use strict';

const { database } = require("../bootstrap");
const { User, UserNames, UserEmail, UserPassword, UserFacebook } = require("../domain/user");

const USERS_TABLE = process.env.USERS_TABLE || 'users-table-dev';

const respository = {
    /**
     * Buscar usuario por correo electrónico
     * @param {UserEmail} email, correo electrónico
     * @return {User | null}
     */
    async search(email) {
        const params = {
            TableName: USERS_TABLE,
            Key: {
              email: email.value(),
            },
        };

        const { Item } = await database.get(params).promise();
        
        if (!Item) {
            return null;
        }

        return Object.freeze(new User(
            UserNames(Item.names),
            UserEmail(Item.email),
            UserPassword(Item.password),
            UserFacebook(Item.facebook),
        ));
    },

    /**
     * Registrar usuario
     * @param {User} user 
     */
    async create(user) {
        const { names, email, password, facebook } = user;
        
        const params = {
            TableName: USERS_TABLE,
            Item: {
              email: email.value(),
              password: password.encrypt(),
              names: names.value(),
              facebook: facebook.value(),
            },
        };

        await database.put(params).promise();

        return user;
    },
};

module.exports = { ...respository };