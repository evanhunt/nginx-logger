'use strict';

const express = require('express');
const router = express.Router();
const authorized = require('../controllers/authorized');

router.route('/login')
    .get(authorized.log_in);

router.route('/logout')
    .post(authorized.logout);


module.exports = router;
