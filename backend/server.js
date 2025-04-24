var express = require('express');
var path = require('path');
var redis = require('redis');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var cors = require('cors'); // Importer cors ici
var app = express();
var bodyParser = require('body-parser');

// mongoose
var config_mongoose = require('./server/config/mongoose');
// configure EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Assuming views will be in the 'views' folder

// Configure CORS pour autoriser les requêtes depuis le frontend
app.use(cors({
    origin: '*', //allow all 
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

// Middleware pour les en-têtes CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // all
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(session({
    store: new RedisStore({
        host: 'localhost',
        port: 6379,
        client: redis.createClient()
    }),
    secret: 'supersecretkey',
    saveUninitialized: true,
    resave: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set path to static folder
app.use(express.static(path.join(__dirname, 'frontend', 'client')));

// require routes config and run
require('./server/config/routes')(app);

// listen on port 3030
var port = process.env.PORT || 3030;
var server = app.listen(port,function() {
    console.log("listening on port 3030");
});

