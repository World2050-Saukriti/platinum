const express = require('express');
// const { engine } = require('express-handlebars');  // Use the new way to require express-handlebars
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
// Set up Handlebars as the view engine with .hbs extension
// app.engine('hbs', engine({ extname: '.hbs' })); // Correct way to initialize Handlebars with .hbs extension
app.set('view engine', 'hbs');
// app.set('views', __dirname + '/views');

// Serve static files from the 'public' folder
app.use(express.static(__dirname + '/public'));

// Root route to render the homepage using Handlebars
app.get('/', (req, res) => {
  res.render('index', { title: 'Senior Football Tournament' });
});

// Socket.io setup
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (msg) => {
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
