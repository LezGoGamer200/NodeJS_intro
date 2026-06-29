const routes = require("express").Router();
const myController = require("../controllers");

routes.get("/", myController.awsomeFunction);
routes.get("/ttech", myController.TTech_Func);
// routes.get("/gather", myController.getAllStudents);

// student routes
routes.use("/students", require("./students"));

module.exports = routes;
