var express = require('express');
var app = express();
var myFunction = require('./myFunction');
var bodyParser = require('body-parser');
var request = require('request');

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/form', function (req, resp) {
    resp.render('form');
});

app.get('/register', function (req, resp) {
    resp.render('register');
});

app.get('/user/:id', function (req, resp) {
    let id = req.params.id;

    request('https://reqres.in/api/users/' + id, function (error, response, body) {
        if (response.statusCode == 200) {
            resp.render('user', { user: body });
        } else if (response.statusCode == 404) {
            resp.render('user', { user: "User not found" });
        }
    });
});

app.get('/resource', function (req, resp) {
    request('https://reqres.in/api/unknown', function (error, response, body) {
        if (response.statusCode == 200) {
            resp.render('resource', { resource: body });
        } else if (response.statusCode == 404) {
            resp.render('resource', { resource: "Resource not found" });
        }
    });
});

app.get('/resource/:id', function (req, resp) {
    let id = req.params.id;

    request('https://reqres.in/api/unknown/' + id, function (error, response, body) {
        if (response.statusCode == 200) {
            resp.render('resource', { resource: body });
        } else if (response.statusCode == 404) {
            resp.render('resource', { user: "Resource not found" });
        }
    });
});

app.post('/create', function (req, resp) {
    console.log(req);
    var postData = req.body;

    request.post({
        url: 'https://reqres.in/api/users',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: require('querystring').stringify(postData)
    }, function (err, response, body) {
        resp.render('create', { create: body });
    });
}); 

app.post('/register', function (req, resp) {
    console.log(req);
    var postData = req.body;

    request.post({
        url: 'https://reqres.in/api/register',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: require('querystring').stringify(postData)
    }, function (err, response, body) {
        resp.render('create', { create: response });
    });
});

app.put('/update', function (req, resp) {
    var putData = {
        "name": "morpheus afsadsa",
        "job": "leader"
    };

    request.put({
        url: 'https://reqres.in/api/users/2',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: require('querystring').stringify(putData)
    }, function (err, response, body) {
        resp.render('create', { create: body });
    });
});

app.listen(3050, function () {
    console.log('Example app listening on port 3050');
});
