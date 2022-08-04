var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('./config/logger');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ledgerRouter = require('./routes/ledger');
var weddingRouter = require('./routes/wed.routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ledger', ledgerRouter);
app.use('/wed', weddingRouter);

app.use(((req, res, next) => {
  logger.info('로그 출력 test용 middleware');

  logger.error('error 메시지');
  logger.warn('warn 메시지');
  logger.info('info 메시지');
  logger.http('http 메시지');
  logger.debug('debug 메시지');

  next();
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
