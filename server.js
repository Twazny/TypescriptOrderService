const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;
app.set('port',PORT);

// app.use(favicon(path.join(__dirname, '/client', 'storm.svg')));
app.use(express.static(path.join(__dirname, '/client')))
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}.`);
});