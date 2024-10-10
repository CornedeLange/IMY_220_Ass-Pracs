//from link in lecture slides
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const port = 3000;
const Poll = require('./poll.js');

const poll = new Poll([
    { name: 'pebble', votes: 0 },
    { name: 'sunshine', votes: 0 },
    { name: 'miso', votes: 0 },
    { name: 'panko', votes: 0 },
    { name: 'snowball', votes: 0 }
]);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/index.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile(__dirname + '/index.js');
});


io.on('connection', (socket) => {
    console.log(`A user connected with ID: ${socket.id}`);


    socket.emit('updateVotes', poll.getVotes());

    socket.on('vote', (catName) => {
        poll.vote(catName);
        io.emit('updateVotes', poll.getVotes());
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});



server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
    