const express = require('express');
require('dotenv').config();
const app = express();

const server = require('http').Server(app);

const cors = require('cors');
const routes = require('./routes/routes');
const db = require('./config/index');

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true,
  },
});
require('./utils/sockets')(io);

app.use(cors());

//Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use(routes);

//starting Server
server.listen(app.get('port'), () => {
  console.log('Server running on port :', app.get('port'));
});
