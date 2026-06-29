const express = require("express");
const router = express.Router();
const controllers = require("../controllers/index");

router.get("/", controllers.getAllStudents);
router.get("/:id", controllers.getSingleStudent);
router.post("/", controllers.createStudent);
router.patch("/:id", controllers.updateStudent);
router.delete("/:id", controllers.deleteStudent);

module.exports = router;
