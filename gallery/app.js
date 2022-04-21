var express = require('express');
require('dotenv').config()
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require("cors");
var app = express();
const mainRouter = require("./routes/router")
var fileUpload = require('express-fileupload')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));
app.use(fileUpload())

app.use('/api', mainRouter)

module.exports = app;
