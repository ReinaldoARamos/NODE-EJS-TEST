const express = require('express'); //chamando a biblioteca express


const app = express(); //criando o const app para aplicar a biblioteca express

app.set("view engine", "ejs" ); //passamos para o express que o ejs será usado para renderizar o HTML

app.get("/", function(req, res) { //criando a rota com o .get
    res.render("index")
})

app.get("/about", function(req, res) { //criando a rota sobre com o .get
    res.render("about")
})

app.listen(8080); //função do express que coloca ele pra ouvir a prota 8080, ou seja, ele ta roddando na máquina a porta 8080
console.log("rodando")