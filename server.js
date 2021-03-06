'use strict';

const serverless = require("serverless-http");
const express = require("express");

const routes = require("./routes");
const middlewares = require("./middlewares");

const initialize = () => {
    const app = express();
    
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json({ strict: false }));
    
    app.use("/", routes);
    
    app.use(middlewares.notFound);
    app.use(middlewares.errorHandler);

    return app;
}

module.exports.handler = serverless(initialize());
module.exports.initialize = initialize;