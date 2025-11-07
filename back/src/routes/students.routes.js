const { Router } = require("express");

const studentsController = require("../controllers/studentsController");

const router = Router();

//endpoints students

router.get("/", studentsController.listStudents);
router.get("/:id", studentsController.getStudentById);
router.post("/", studentsController.createStudent);
router.put("/:id", studentsController.modifyStudent);


module.exports = router;
