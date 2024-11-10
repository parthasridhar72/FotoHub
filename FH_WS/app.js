var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/routing');



var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

const PORT = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening in port ${PORT}`);
    
})


module.exports = app;
