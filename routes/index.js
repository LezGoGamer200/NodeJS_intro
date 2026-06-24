const myController = require("../controllers");
const routes = require("express").Router();
routes.get("/", myController.awsomeFunction);
routes.get("/ttech", myController.TTech_Func);
module.exports = routes;
