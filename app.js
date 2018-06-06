const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const redisStore = require('connect-redis')(session);
const redis = require('redis');
const client = redis.createClient();
const logger = require('morgan');
const mongoose = require('mongoose');
const utils = require('./utils');

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: utils.mekeRandomCode(128),
    resave: false,
    saveUninitialized: false,
    cookie: {
        // secure: true,
    },
    store: new redisStore({
        host: '127.0.0.1',
        port: 6379,
        client: client,
        ttl: 260,
    }),
}));

app.use(express.static(path.join(__dirname, 'public')));

const bearsRoutes = require('./routes/bears');
const authRoutes = require('./routes/authorized');

app.use('/api', bearsRoutes);
app.use('/api', authRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next();
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development'
        ? err
        : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
