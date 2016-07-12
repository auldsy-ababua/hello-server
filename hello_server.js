var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send("Hello World");
});
app.get('/mario', function(request, response) {
    response.send("Hello Mario");
});

app.get('/colin/:lastname', function(request, response) {
    var first = request.params.firstname;
    var last = request.params.lastname;
    response.send(["Hi", first, last].join(" "));
});

app.get('/:firstname/:lastname', function(request, response) {
    var first = request.params.firstname;
    var last = request.params.lastname;
    response.send(["Hello", first, last].join(" "));
});

app.listen(process.env.PORT, process.env.IP);


var bar = "hello";
function typeOfTester (){
    if
}
typeof null === "object";
instanceof 