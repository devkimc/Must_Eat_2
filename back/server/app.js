import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import createError from 'http-errors';
import { createPool } from 'mysql2';
import session from 'express-session';
import config from './config/db-config.json';
import api from './routes';
import jwtObj from './config/jwt.json';

// const fileStore = require('session-file-store')(session);

// connection SUCCESS CHECK
const pool = createPool(config);

export const getConnection = callback => {
    pool.getConnection((err, conn) => {
        if (err) throw err;
        else callback(conn);
    });
};

const app = express();

// 세션 설정
const SECRET_KEY = jwtObj.secret;
const maxAge = 1000 * 60 * 30;

app.use(
    session({
        httpOnly: true,
        secret: SECRET_KEY,
        resave: false,
        saveUninitialized: true,
        // store: new fileStore(),
        cookie: { maxAge },
    }),
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../project_www/build')));
// app.use(cors({ origin: '*'}))
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    // res.render('error')
});

export default app;
