var express = require('express');
var app = express();
// setting the middleware
app.use(express.static('source'));
// giving the port a number
var port = process.env.PORT || 3030;

var server = app.listen(port, () => {
    console.log(`Server started on port `+ port);
});