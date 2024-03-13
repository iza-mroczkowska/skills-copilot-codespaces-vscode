// Create web server and listen on port 3000

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    res.send('Comments');
    });

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    }
);

