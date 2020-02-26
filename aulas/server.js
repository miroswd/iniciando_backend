const express = require('express'); // Importa o express debtro de uma const
const nunjucks = require('nunjucks');

const server = express(); // Executa a variável expess
const videos = require('./data') // ./ -> referencia ao diretório atual


server.use(express.static('public')) // Usando arquivos estáticos


// --- Configurando template engine --- //
server.set("view engine", "njk")
         // view engine - qual o motor de view == tudo o que for html

nunjucks.configure("views", {
         // Pasta que irá salvar os arquivos
         // configurações
    express:server, // o que vai usar:variável
    autoescape:false, // Permite imprimir o html
    noCache: true, // Não guarda a versão
})


// --- Pegando a rota principal --- //
server.get('/', function(req,res){
    // req - request  -> listen
    // res - response -> return

    const about = {
        avatar_url:"https://avatars1.githubusercontent.com/u/54915150?s=460&v=4",
        name: "Miroswd",
        role:"Desenvolvedor Frontend/Backend",
        description:'HTML, CSS, JavaScript, Node.JS, ReactJS e React Native. Estudando na <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        links: [
            {
                name: "Github",
                url:'https://github.com/miroswd'
            },
            {
                name: "Linkedin",
                url:'https://www.linkedin.com/in/altamir-santos-874368146/'
            },
            {
                name: "Behance",
                url:'https://www.behance.net/altamirherc75c'
            }
        ]
    }

    return res.render("about",{about}) // Busca o about.html, não precisa passar o njk/html, pois já foi configurado no nunjucks
});

server.get('/classes', function(req,res){
    return res.render("classes",{items:videos}) // Passando os dados como variável item, para o classes
})

server.get('/video', function(req,res){
    const id = req.query.id;
    const video = videos.find(function(video){
        // if (video.id == id ){
        //     console.log(video)
        //     return true
        //     }
        return video.id == id
    }) 
        
        if(!video) {
            return res.send("Video not found")
        }

        return res.render("video", {item:video})
})


server.listen(5000, function(){
    console.log('Server is running')
})
