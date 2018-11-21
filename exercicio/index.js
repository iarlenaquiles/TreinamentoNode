var express = require('express');
var app = express();
var myFunction = require('./myFunction');
var bodyParser = require('body-parser');

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/oddeven/:value', function (req, resp) {
    let value = req.params.value;
    resp.send("The number is " + myFunction.oddOrEven(value));
});

app.get('/random', function (req, resp) {
    resp.render('random', { number: myFunction.random() });
});

app.get('/number/:number', function (req, resp) {
    let number = req.params.number;

    if (number < 5) {
        resp.render('random', { number });
    } else { 
        resp.send(number);
    }

});

app.get('/array', function(req, resp) {
    resp.render('array', { array: myFunction.array()})
});

app.listen(3050, function () {
    console.log('Example app listening on port 3050');
});
