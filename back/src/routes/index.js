const { Router } = require("express");

const router = Router();

//montage des sous routes
//route élèves/studapi/students

router.use("/students", require("./students.routes"));
router.use("/teddybears", require("./teddybears.routes"));

module.exports = router;
