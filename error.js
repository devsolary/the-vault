const express = require('express');
const connectDb = require('./config/db');
const app = express();
const port = 3000

app.use(express.json())

connectDb()

app.get('/', (req, res) => {
    res.send("this is the initailization of the vault project")
});


//creating a simple test route to craete a file on database
app.post("/createintel", async (req, res) => {
    try {
        const { title, description, location, agentId } = req.body;
        console.log( { title, description, location, agentId } )
        const intel = new IntelSchema({title, description, location, agentId})
        console.log("saved");
        await intel.save()
        res.status(201).send(intel).json({response: "data received"})
    } catch (error) {
        res.status(400).json({response: "error receiving data"})
    }
})

//201 user
//400 bad requst
//500 server eeror
//200 suceessful



app.listen(port, () => {
    console.log(`server is runing on port ${port}`);
})