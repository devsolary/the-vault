const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send("this is the initailization of the vault")
});

app.listen(port, () => {
    console.log(`server is runing on port ${port}`);
})