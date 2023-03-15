var createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const app = express();
const port = process.env.PORT || '3000';
const cors = require('cors');
app.use(express.json({ extended: false, limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }))
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// var options = {
//     key: fs.readFileSync('./certs/SSL_ICWC_2023_Export_srvsip.key'),
//     cert: fs.readFileSync('./certs/SSL_ICWC_2023_Export_srvsip.pem')
// };

app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

require('./src/routes/index')(app);

app.use((req, res, next) => {
  next(createError(404));
});
app.listen(port, function() {
  console.log("Listening on port "+ port);
});