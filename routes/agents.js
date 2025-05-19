const express = require("express")
const router = express.Router();
const Agent = require("../schema/agentSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const JWT_SECRET = "yourSecretKeyHere";



router.post("/signupagent", async(req, res) => {
    try{
        const {username, password, firstName, lastName, age} = req.body
        const hashPassword = await bcrypt.hash(password, saltRounds);
        const agent = new Agent({username, password: hashPassword, firstName, lastName, age});
        await agent.save();
    res.status(200).json({ yourdata: agent });
      } catch (error) {
        res.status(400).json({ Error: "Could not create agent account", details: error.message });
      }
})

router.get("/loginagent", async(req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Agent.findOne({ username });
  
    if (!user) {
      return res.status(200).json("No user with the username");
    }
  
    const hashPassword = user.password;
    const passwordCheck = await bcrypt.compare(password, hashPassword);
  
    if (!passwordCheck) {
      return res.status(200).json("Incorrect login info, please try again");
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      JWT_SECRET,
      { expiresIn: "1h" } // Token expires in 1 hour
    );
  
    res.status(200).json({response: "login successful", token, user: user});
  } catch (error) {
    res.status(400).json({
      Error: "Could not login agent account",
      details: error.message
    });
  }
  
})

module.exports = router