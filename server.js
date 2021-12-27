// External Modules //
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

// Instanced Module //
const app = express();

// Configuration //
const PORT = process.env.PORT || 4000; //for deployment in heroku
app.set("view engine", "ejs");

// Internal Routes //
app.get('/', (req, res) => { //Renders Landing Page
    res.render("home");
});

app.use("/shoes", require("./routes/shoes"));

// Server Listener //
app.listen(PORT, () => console.log(`YO! Server is connected at ${PORT}`))

//------- Project Notes -------------//
//*MODULES USED*//
// Utilized Heroku app to depoly API.
// Utilized RapidAPI to create API.
// Utilized express.js for backend framework to create a live environment via port config and server file. 
// Utilized Cheerio for webscraping - allows for us to pick out HTML elements on a webpage like jQuery.
// Utilized Axios for HTTP CRUD opertations - GET, POST, PUT, DELETE.
//* SELF TIPS TO REMEMBER *//
// NPM INIT creates a JSON package file so we can begin adding modules.
// Check package JSON file for list of dependencies (all of the terminal inputs of npm i "xxx")
// As a general rule package json files are needed whenver creating a node.js project.
