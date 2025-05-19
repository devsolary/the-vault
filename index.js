
const express = require("express");
const connectDb = require('./config/db');
const app = express();
const port = 3000;
const intels = require("./routes/intels")
const tokenAuth = require("./middleware/tokenAuth")
const agents = require("./routes/agents")

connectDb();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is the initailization of the vault");
});

app.use("/", agents);

app.use("/", tokenAuth, intels);

app.listen(port, () => {
    console.log(`server is runing on port ${port}`);
})
