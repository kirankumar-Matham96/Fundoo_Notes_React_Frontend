const express = require('express');
router = express.Router();
usersRoute = require('./controller');

router.get('/', usersRoute.usersController)

module.exports = router;