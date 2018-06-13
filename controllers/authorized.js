'use strict';

const Joi = require('Joi');

exports.log_in = function(req, res) {
    const schema = Joi.object().keys({
        username: Joi.string().min(5).max(30).required(),
        password: Joi.string().min(5).max(30).required(),
    });

    // const result = Joi.validate(req.body, schema);
    console.log(req.query);
    const result = Joi.validate(req.query, schema);

    if (result.error) {
        return res.status(400).send(result.error.details[0].message);
    }
    // req.session.key = req.body.username;
    req.session.key = req.query.username;
    // 追加
    // res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
    // res.download('./doc/mongodb.md');
    return res.json({
        message: 'is ok',
    });
};

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        if (err) {
            return res.json({
                message: 'logout is error',
            });
        }
        return res.json({
            message: 'is logout',
        });
    });
};
