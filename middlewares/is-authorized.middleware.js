'use strict';

const {
    WrongCredentials, 
    CredentialsNotEntered, 
} = require("../errors");

const { 
    UserEmail, 
    UserPassword,
    UserFinder, 
} = require("../domain/user");

const { UserRepository } = require("../repositories");

const finder = new UserFinder(UserRepository);

module.exports = async (req, res, next) => {
    const authorization = req.get('authorization')
    
    if (!authorization) {
        return next(new CredentialsNotEntered());
    }

    const auth = authorization.split(" ")[1];
    const basic = new Buffer.from(auth, "base64").toString();
    const [ email, password ] = basic.split(":");

    if (!(email && password)) {
        return next(new WrongCredentials());
    }

    try {
        const voEmail = UserEmail(email);
        const user = await finder.search(voEmail);

        if (!user) {
            throw new WrongCredentials();
        }

        if (!user.password.compare(password)) {
            throw new WrongCredentials();
        }

        next();
    } catch (error) {
        next(error);
    }
}