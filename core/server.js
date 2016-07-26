// Express configuration
'use strict';
var express = require('express');
var app = express();

var port = 1337;
    
// Start serving everything static
app.use(express.static('dist'));


// start the server
app.listen(port, function () {
    console.log('Example app listening on port '+ port);
});    


