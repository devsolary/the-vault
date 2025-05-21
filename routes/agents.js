const express = require("express");
const router = express.Router();
const handleLogin = require("../controllers/authController");
const handleSignUp = require("../controllers/signupController");

router.post("/signupagent", handleSignUp);
router.get("/loginagent", handleLogin);

module.exports = router;
