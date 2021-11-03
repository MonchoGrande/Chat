const router = require('express').Router();
const controllerUser = require('../controllers/user');
const chat = (require('../controllers/message'));
const path = require('path');

/* ROUTES */

router.post('/login', controllerUser.createUser);



module.exports = router;
