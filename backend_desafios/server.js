const express = require("express");
const nunjucks = require("nunjucks")

const server = express();
const data = require('./data')

server.use(express.static("public"))

server.set("view engine","njk")
        // Qual o motor de view == html

nunjucks.configure("views", {
    express:server
})
        // Pasta onde estão os arquivos
        // COnfigurações

// ---- Exibindo resultados ---- //
server.get('/', function(req,res){
    const info = {
        avatar_url:"https://avatars0.githubusercontent.com/u/28929274?s=200&v=4",
        name:"Rocketseat",
        description:"Plataforma de educação em tecnologia",
        techs:[
            {
                name:"ES6+",
            },
            {
                name:"JavaScript",
            },
            {
                name:"Node.JS",
            },
            {
                name:"ReactJS",
            },
            {
                name:"React Native",
            },
            {
                name:"TypeScript",
            },
        ],
        links:[
            {name:"Github",url:"https://github.com/rocketseat"},
            {name:"Instagram",url:"https://www.instagram.com/rocketseat_oficial/"},
            {name:"Twitter",url:"https://twitter.com/rocketseat?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"},
        ]


    }

    return res.render('sobre',{info})
})

server.get('/conteudos', function(req,res){
    return res.render('conteudos',{items:data})
})

server.use(function(req,res){
    res.status(404).render('not-found')
})


// ---- Ouvindo a porta 5000 ---- //
server.listen(5000,function(){
    console.log("Server is running")
})