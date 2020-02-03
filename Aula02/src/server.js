const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const data = require('./data')

server.use(express.static('public'));

server.set('view engine','njk');

nunjucks.configure('views',{
  express:server
})

server.get('/', function(req,res){
  const user = {
    name:'Miroswd',
    role:'Desenvolvedor Full-stack',
    description:'Estudando os conceitos de HTML, CSS, JavaScript, Node.JS, ReactJS, React Native, GIT e outras tecnologias.',
    links:[
      {name:'Github', url:'https://github.com/miroswd'},
      {name:'Linkedin', url:'https://www.linkedin.com/in/altamir-santos-874368146/'}
    ]
  }

  return res.render('home',{user})
})

server.get('/rocketseat', function(req,res){
  return res.render('rocketseat')
})

server.get('/courses', function(req,res){
  return res.render('courses',{items:data})
})

// NOT FOUND

server.use(function(req,res){
  res.status(404).render('not-found');
})

// Route params

server.get('/courses/:id', function(req,res) {
  const id = req.params.id
  const course = data.find(function(data){
    if (data.name = id ){
      return true
    }

    if (!course){
      return res.status(404).render('not-found')
    }

    return res.render('courses', {item:course})
  })
})


server.listen(5000, function(){
  // console.log('Server is running')
})