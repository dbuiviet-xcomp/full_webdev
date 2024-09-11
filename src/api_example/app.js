const { log } = require("console");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req, res){
    //res.send("Server is up and running")
    res.sendFile(__dirname+"/index.html");

    //const url = "https://api.openweathermap.org/data/2.5/weather?appid=ced70d58249342cb6e6303d998ebd266&units=metric&q=Hanoi";

    // https.get(url, (response)=>{
    //     console.log(res.statusCode);
    //     //console.log(res.headers);
        
    //     response.on("data", (d)=>{
    //         //process.stdout.write(d);
    //         const data = JSON.parse(d);
    //         // console.log(data);
    //         const temp = data.main.temp;
            
    //         //console.log(data.main.feels_like);
    //         const weatherDesc = data.weather[0].description;
    //         //console.log(weatherDesc);

    //         const icon = data.weather[0].icon;
    //         const img_src = 'https://openweathermap.org/img/wn/'+icon+'@2x.png';

    //         res.write("<p>The weather currently is like <img src=" + img_src + ">" + weatherDesc + "</p>");
    //         res.write("<h3>The temparature in Hanoi now is " + temp + " Celsius degree</h3>");
    //         res.send()
    //         // res.send("<h1>The temparature in Hanoi now is:" + temp + " Celsius degree</h1>");            

    //     })


    // }).on("error", (e)=>{
    //     console.error(e);
    // })    
})

app.post("/", function(req, res){
    //console.log(req.body);
    
    const query = req.body.cityName;
    const apiKey = "ced70d58249342cb6e6303d998ebd266";
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?appid="+apiKey+"&units="+unit+"&q="+query;

    https.get(url, (response)=>{
        console.log(res.statusCode);
        //console.log(res.headers);
        
        response.on("data", (d)=>{
            //process.stdout.write(d);
            const data = JSON.parse(d);
            // console.log(data);
            const temp = data.main.temp;
            
            //console.log(data.main.feels_like);
            const weatherDesc = data.weather[0].description;
            //console.log(weatherDesc);

            const icon = data.weather[0].icon;
            const img_src = 'https://openweathermap.org/img/wn/'+icon+'@2x.png';

            res.write("<p>The weather currently is like <img src=" + img_src + ">" + weatherDesc + "</p>");
            res.write("<h3>The temparature in "+query+" now is " + temp + " Celsius degree</h3>");
            res.send()
            // res.send("<h1>The temparature in Hanoi now is:" + temp + " Celsius degree</h1>");            

        })
    }).on("error", (e)=>{
        console.error(e);
    })    
})

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})