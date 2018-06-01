'use strict';

const express = require('express');
const router = express.Router();
const bears = require('../controllers/bears');

router.route('/bears')
    .get(bears.list_all_tasks)
    .post(bears.create_new_tasks);

router.route('/bears/:bear_id')
    .get(bears.query_one_tasks)
    .put(bears.update_one_tasks)
    .delete(bears.delete_one_tasks);
    
module.exports = router;
