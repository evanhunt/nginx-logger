'use strict';

const express = require('express');
const router = express.Router();
const authorized = require('../controllers/authorized');

router.route('/login')
    .post(authorized.log_in);

router.route('/logout')
    .post(authorized.logout);


module.exports = router;
