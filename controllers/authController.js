const Agent = require("../schema/agentSchema");
const bcrypt = require("bcrypt");
const JWT_SECRET = "yourSecretKeyHere";
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
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

    res.status(200).json({ response: "login successful", token, user: user });
  } catch (error) {
    res.status(400).json({
      Error: "Could not login agent account",
      details: error.message,
    });
  }
};

module.exports = handleLogin;
