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

app.get('/oddeven', function (req, resp) {
    resp.render('home', { item: "Lorem Ipsum" });
});

app.get('/osf', function (req, resp) {
    resp.send("Bem-vindo ao treinamento");
});

app.get('/call', function (req, resp) {
    resp.send(myFunction.call());
});

app.get('/square/:value', function (req, resp) {
    let value = req.params.value;
    resp.send("Square: " + myFunction.square(value));
});

app.listen(3050, function () {
    console.log('Example app listening on port 3050');
});
