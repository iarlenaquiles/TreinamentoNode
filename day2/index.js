var express = require('express');
var app = express();

app.get('/', function (req, resp) {
    resp.send('Hello World\n');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});
