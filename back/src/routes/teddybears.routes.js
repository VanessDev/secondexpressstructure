const { Router } = require("express");

const teddybearsController = require("../controllers/teddybearsController");

const router = Router();

//endpoints teddybears

router.get("/", teddybearsController.listTeddybears);
router.get("/:id", teddybearsController.getTeddybearById);
router.post("/", teddybearsController.createTeddybear);

module.exports = router;
