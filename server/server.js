const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
const path = require('path');
const app = express();

const routes = require('./routes');
// const logger = require('./utils/logger');
// app.use(express.static(path.join(__dirname, 'build')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '1mb' }));

// configuration =================
app.use(express.static(path.join(__dirname, '/../client/build'))); // set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({ extended: 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// routes =======================================================================
app.use('/api', routes);

const port = process.env.PORT || 8010;
app.listen(port);
console.log(`> Ready on PORT:${port}`);
