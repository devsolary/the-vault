const express = require("express");
const router = express.Router();
const intelController = require("../controllers/intelController");

router.post("/createintel", intelController.createIntel);
router.get("/intel/:id", intelController.getIntel);

module.exports = router;
