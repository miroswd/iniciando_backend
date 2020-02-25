const express = require('express'); // Importa o express debtro de uma const
const nunjucks = require('nunjucks');

const server = express(); // Executa a variável expess

server.use(express.static('public')) // Usando arquivos estáticos


// --- Configurando template engine --- //
server.set("view engine", "njk")
         // view engine - qual o motor de view == tudo o que for html

nunjucks.configure("views", {
         // Pasta que irá salvar os arquivos
         // configurações
    express:server // o que vai usar:variável
})


// --- Pegando a rota principal --- //
server.get('/', function(req,res){
    // req - request  -> listen
    // res - response -> return
    return res.render("about") // Busca o about.html, não precisa passar o njk/html, pois já foi configurado no nunjucks
});

server.get('/classes', function(req,res){
    return res.render("classes")
})


server.listen(5000, function(){
    console.log('Server is running')
})
