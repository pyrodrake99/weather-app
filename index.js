const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "style.css");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})