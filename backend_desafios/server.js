const express = require("express");
const nunjucks = require("nunjucks")

const server = express();

server.use(express.static("public"))

server.set("view engine","html")
        // Qual o motor de view == html

nunjucks.configure("views", {
    express:server
})
        // Pasta onde estão os arquivos
        // COnfigurações

// ---- Exibindo resultados ---- //
server.get('/', function(req,res){
    return res.render('sobre')
})

server.get('/conteudos', function(req,res){
    return res.render('conteudos')
})


// ---- Ouvindo a porta 5000 ---- //
server.listen(5000,function(){
    console.log("Server is running")
})