const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const config = require('./config');
const router = require('../routes');
const loaders = require('../loaders/connectDB');
const accessLogStream = require('../scripts/loggers/logger');
const errorHandler = require('../middlewares/errorHandler');
const ApiError = require('../errors/ApiError');

const app = express();

config(); // set env config
loaders(); // load db

// middlewares
app.use(
  cors({
    methods: '*',
    origin: '*',
  })
); // cors middleware
app.use(express.json()); // express body parser middleware
app.use(express.static('doc')); // middleware for static files
app.use(morgan('combined', { stream: accessLogStream })); // setup the logger

// app routes
app.use('/', router);


app.use((req, res, next) => {
  if (req.url === '/records' && req.method !== 'POST') {
    // error middleware for other than post requests to /records url
    next(
      ApiError.badRequest(`This method is not allowed for ${req.originalUrl}`)
    );
  } else {
    // error middleware for unknown route requests
    next(ApiError.notFound(`Couldn't find ${req.originalUrl} on this server!`));
  }
});

// error middleware for handling errors
app.use(errorHandler);

module.exports = app;