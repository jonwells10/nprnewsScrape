let express = require('express'); 
let bodyParser = require('body-parser'); 
let exphbs = require('express-handlebars'); 
// let logger = require("morgan"); // Logger
var db = require("./models"); // Require all models
// let cheerio = require('cheerio'; // Web Scrapper
// let mongoose = require('mongoose'; // MongoDB ORM
// let db from "./models"; // Require all models


let PORT = process.env.PORT || 8080;
let app = express(); 


// app.use(logger("dev")); // Use morgan logger for logging requests
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(express.static("public")); 

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/webScrapperController.js")(app);


app.listen(PORT, ()=>{
    console.log(`App listening on PORT ${PORT}`);
})
