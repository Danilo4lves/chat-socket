const express = require("express");

const Router = express.Router();

const Controller = require('./controller');

Router.get("/messages", Controller.index);

module.exports = Router;
