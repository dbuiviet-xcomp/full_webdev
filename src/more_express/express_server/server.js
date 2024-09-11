const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    //res.send("<h1>Hello from server</h1>");
    res.sendFile(__dirname+"/index.html");
});

app.get("/bmi.html", function(req, res){
    res.sendFile(__dirname+"/bmi.html");
});

app.post("/", function(req, res) {
    console.log(req.body);
    

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of calculation is: " + result);
});

app.post("/bmi.html", function(req, res){
    var w = parseFloat(req.body.weight);
    var h = parseFloat(req.body.height);

    var bmi = w/(h*h);

    res.send("Your BMI is: " + bmi);
});

app.listen(3000, function() {
    console.log("Server has started on port 3000");
});

