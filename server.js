const express = require('express'); //chamando a biblioteca express


const app = express(); //criando o const app para aplicar a biblioteca express

app.set("view engine", "ejs" ); //passamos para o express que o ejs será usado para renderizar o HTML

app.get("/", function(req, res) {
    res.render("index")
})
