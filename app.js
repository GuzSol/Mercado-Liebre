const express = require("express");
const path = require ("path");
const dotenv = require ("dotenv").config();

const app = express();

const publicPath = path.resolve(__dirname, "./public");

app.use( express.static(publicPath));


app.get("/", (req, res) => {
    res.sendFile (path.resolve(__dirname, "./views/home.html"));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

/* app.listen (3000, () =>
console.log ("Servidor corriendo")); */

/* process.env.PORT, () => {
    console.log("Servidor corriendo en el puerto 3000");
}; */

app.listen (process.env.PORT, () =>{
    console.log("servidor corriendo en el puerto ${port}");});


 /* saqué de mi package.json
     {
        "name": "m4-mercado-liebre",
        "version": "1.0.0",
        "description": "ejercicio",
        "main": "app.js",
        "scripts": {
          "test": "nodemon src/index.js",
          "start": "node src/index.js"
        },
        "author": "Guz",
        "license": "ISC",
        "dependencies": {
          "dotenv": "^16.3.1",
          "express": "^4.18.2"
        }
      }
 */      