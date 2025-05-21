//logic for handlling CRUD
const Intel = require("../schema/intelSchema");
const createIntel = async (req, res) => {
  try {
    const { title, description, location } = req.body;
    const agentId = req.user.id; // securely extracted from the token
    const intel = new Intel({ title, description, location, agentId });
    await intel.save();
    res.status(200).json({ yourdata: intel });
  } catch (error) {
    res
      .status(400)
      .json({ Error: "Could not create intel", details: error.message });
  }
};

const getIntel = async (req, res) => {
  const { id } = req.params;

  try {
    const intel = await Intel.findById({ _id: id });
    if (!intel) {
      return res.status(404).json({ message: "no intel found on database" });
    }
    res.status(200).json(intel);
  } catch (error) {
    res
      .status(500)
      .json({ error: "error retriving intel", error: error.message });
  }
};

module.exports = { createIntel, getIntel };
