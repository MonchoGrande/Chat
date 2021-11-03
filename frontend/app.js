const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const routes = require('./routes/routes.js');



//Settings
app.set('port', process.env.PORT ||8080);

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use(routes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//starting Server
server.listen(app.get('port'), () => {
  console.log('Servidor escuchando en el puerto :', app.get('port'));
});
