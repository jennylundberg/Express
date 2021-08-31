const express = require('express');
const app = express();
const port = 1337;
import guestbook from './routes/guestbook';

app.get('/', (req, res) => {
    res.send('Hello from server');
});

guestbook();

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});