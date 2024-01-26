// Building A Simple Blocking Server
// !!! - Make sure to Disable cache in Chrome Dev Tools - !!!

const express = require('express');

const app = express();

function delay(duration) {
    const startTime = Date.now();
    while(Date.now() - startTime < duration) {
        // Event loop is blocked
    }
}

app.get('/', (req, res) => {
    res.send(`Performance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
    delay(9000);
    res.send(`Ding ding ding! ${process.pid}`);
});

console.log('Running server.js...');
console.log(`Worker process started with pid ${process.pid}`);
app.listen(3000);

