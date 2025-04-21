const express = require('express');
const app = express();
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send("this is the initailization of the vault")
});

//creating a simple test route to craete a file on database
app.post("/data", (req, res) => {
    const receivedData = req.body;
    res.json({ message: "data received", data : receivedData })
})

//CRUD
// C = create 
//R = read
// U = update
//D = delete



app.listen(port, () => {
    console.log(`server is runing on port ${port}`);
})