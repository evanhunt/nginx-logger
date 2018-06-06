'use strict';

const Joi = require('Joi');
const Bear = require('../models/bear');
const utils = require('../utils');

exports.list_all_tasks = function(req, res) {
    // if (req.session.key) {
    //
    // }
    console.log(req.session);
    Bear.find((err, bears) => {
        if (err) {
            res.send(err);
        }
        res.json(bears);
    });
};

exports.create_new_tasks = function(req, res) {
    const bear = new Bear();

    const schema = Joi.object().keys({
        name: Joi.string().min(5).max(30).required(),
    });
    const result = Joi.validate(req.body, schema);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    bear.name = req.body.name;

    bear.save((err) => {
        if (err) {
            res.send(err);
        }
        res.json({
            message: 'Bear created!',
        });
    });
};

exports.query_one_tasks = function(req, res) {
    Bear.findById(req.params.bear_id, (err, bear) => {
        if (err) {
            res.send(err);
        }
        res.json(bear);
    })
};

exports.update_one_tasks = function(req, res) {
    Bear.findById(req.params.bear_id, (err, bear) => {
        if (err) {
            res.send(err);
        }
        bear.name = req.body.name;

        bear.save((err) => {
            if (err) {
                res.send(err);
            }
            res.json({
                message: 'Bear updated!',
            });
        });
    })
};

exports.delete_one_tasks = function(req, res) {
    Bear.remove({
        _id: req.params.bear_id,
    }, (err, bear) => {
        if (err) {
            res.send(err);
        }
        res.json({
            message: 'Successfully deleted',
        });
    })
};
