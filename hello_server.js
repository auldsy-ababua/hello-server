var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send("Hello World");
});

app.get('/headers', function(request, response) {
    response.send({
      "host":"localhost:8080",
      "user-agent":"curl/7.49.1","accept":"*/*"
    });
});

app.get('/headers/:header_name', function(request, response) {
    var headers = {
      "host":"localhost:8080",
      "user-agent":"curl/7.49.1",
      "accept":"*/*",
      "colin": "mario",
      "version": "1.1"
    }
    var header_name = request.params.header_name;
    response.send(headers[header_name]);
});

app.get('/:firstname/:lastname', function(request, response) {
    var first = request.params.firstname;
    var last = request.params.lastname;
    response.send(["Hello", first, last].join(" "));
});

app.get('/', function(request, response) {
    response.json({
        name: 'Kim Gordon',
        instrument: 'Bass'
    });
});

app.listen(8080);
