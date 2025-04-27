
const express = require("express");
const connectDb = require('./config/db');
const intelSchema = require("./schema/intelSchema");
const app = express();
const port = 3000;

connectDb();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is the initailization of the vault");
});

//creating a simple test route to craete a file on database
app.post("/createintel", async (req, res) => {
  try {
    const { title, description, location, agentId } = req.body;
    const intel = new intelSchema({ title, description, location, agentId });
    console.log("Saved");
    await intel.save();
    res.status(200).json({ yourdata: intel });
  } catch (error) {
    res.status(400).json({ Error: "Could not create intel" });
  }
});

app.listen(port, () => {
    console.log(`server is runing on port ${port}`);
})
