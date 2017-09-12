var express = require('express');
var app= express();
var bodyParser = require('body-parser');

app.set('num', 1);
var num = app.get('num');
console.log(num); //1

app.use(function(req, res, next) {
    console.log('Record timestamp');
    next();
});

app.use(bodyParser.json());

app.post('/calculator/rest/cmtoinch', function (req, res, next) {
    var body = req.body;  
	var cm = body.cm;
	var result = 0;
	var object = {
		"cm": cm,
		"result": cm * 0.3937007874
	}
    res.json(object); 
});

app.post('/calculator/rest/kbtotb', function (req, res, next) {
    var body = req.body;  
	var kb = body.kb;
	var result = 0;
	var object = {
		"kb": kb,
        "result": kb * Math.pow(10, -9)
    }
    res.json(object); 
});

app.post('/calculator/rest/plus', function(req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var result = 0;
    var object = {
        "x": x,
        "y": y,
        "result": x + y 
    }
    res.json(object);

});

app.listen(3000, function() {
    console.log('Starting node on part 3000');
});