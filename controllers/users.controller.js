'use strict';

const { 
    UserFinder,
    UserCreator,
    User,
    UserEmail,
    UserNames,
    UserPassword,
    UserFacebook,
} = require("../domain/user");
const { UserNotFound, EmailAlreadyRegistered } = require("../errors");
const { UserRepository } = require("../repositories");

const finder = new UserFinder(UserRepository);
const creator = new UserCreator(UserRepository);

class UsersController {
    async get(req, res, next) {
        const { email } = req.params;
        
        try {
            const voEmail = UserEmail(email);
            const user = await finder.search(voEmail);

            if (!user) {
                return next(new UserNotFound(email));
            }
            
            res.status(200).json({
                nombres: user.names.value(),
                correo: user.email.value(),
                facebook: user.facebook.value(),
            });
        } catch (error) {
            next(error);
        }
    }

    async post(req, res, next) {
        const { nombres, correo, clave, facebook } = req.body;

        try {
            const voNames = UserNames(nombres);
            const voEmail = UserEmail(correo);
            const voPassword = UserPassword(clave);
            const voFacebook = UserFacebook(facebook);

            const user = await finder.search(voEmail);

            if (user) {
                return next(
                    new EmailAlreadyRegistered(voEmail.value())
                );
            }

            await creator.create(
                new User(voNames, voEmail, voPassword, voFacebook)
            );

            res.status(201).json({
                mensaje: `El usuario -${voEmail.value()}- ha sido registrado correctamente`,
            });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}

module.exports = UsersController;