const routes = require("express").Router();
const myController = require("../controllers");

// routes.get("/", myController.awsomeFunction);
routes.get("/", myController.getAllStudents);
routes.get("/ttech", myController.TTech_Func);
// routes.get("/gather", myController.getAllStudents);

module.exports = routes;
