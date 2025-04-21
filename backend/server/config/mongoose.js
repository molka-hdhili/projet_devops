/**
 * Created by Tejas on 10/24/2015.
 */
var mongoose = require('mongoose');
var fs = require('fs');
var dbName = 'dispatchr_cms';

var env  = process.env.NODE_ENV || 'development';


var connect = function () {
    var options = { server:{socketOptions:{keepAlive:1}}};
    if(env === 'development'){
        mongoose.connect('mongodb://mongo/'+dbName, options);

    }
    else {
        mongoose.connect('mongodb://mongo/'+dbName, options);    }
}
connect();

mongoose.connection.on('error', function (err) {
    console.log("Mongoose error!", err);
});

//reconnect
mongoose.connection.on('disconnected', function () {
    connect();
});

var models_path = __dirname + '/../models';
fs.readdirSync(models_path).forEach(function (file) {
    if(~file.indexOf('.js'))
    {  
        require(models_path + '/' + file);
    }
});