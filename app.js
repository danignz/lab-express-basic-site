// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// Root path access redirects to static home.html file.
app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));

// about route:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

// songs route:
app.get('/songs', (request, response, next) => response.sendFile(__dirname + '/views/songs.html'));

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));
