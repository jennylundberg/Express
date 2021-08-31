const express = require('express');
const app = express();
const port = 1337;
const guestbookGet = require('./routes/guestbook');
const htmlGet = require('./public/script');

app.get('/', (req, res) => {
    res.send('Hello from server');
});

app.use(express.static(__dirname + '/public'))

app.get('/guestbook', guestbookGet);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

