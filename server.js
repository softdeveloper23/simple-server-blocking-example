// Building A Simple Blocking Server

const express = require('express');
const cluster = require('cluster');

const app = express();

function delay(duration) {
    const startTime = Date.now();
    while(Date.now() - startTime < duration) {
        // Event loop is blocked
    }
}

app.get('/', (req, res) => {
    res.send('Performance example');
});

app.get('/timer', (req, res) => {
    delay(9000);
    res.send('Ding ding ding!');
});

if (cluster.isMaster) {
    console.log(`Master has been started with pid ${process.pid}`);
    cluster.fork();
    cluster.fork();
} else {
    console.log(`Worker process started with pid ${process.pid}`);
    app.listen(3000);
}

