const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

module.exports = app;