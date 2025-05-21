const Agent = require("../schema/agentSchema");
const saltRounds = 10;
const bcrypt = require("bcrypt");
const handleSignUp = async (req, res) => {
  try {
    const { username, password, firstName, lastName, age } = req.body;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    const agent = new Agent({
      username,
      password: hashPassword,
      firstName,
      lastName,
      age,
    });
    await agent.save();
    res.status(200).json({ yourdata: agent });
  } catch (error) {
    res.status(400).json({
      Error: "Could not create agent account",
      details: error.message,
    });
  }
};

module.exports = handleSignUp;
