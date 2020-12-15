const express = require('express');
const port = 3000 || process.env.PORT;

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
    console.log(`Server is running on port ${3000}`);
})
