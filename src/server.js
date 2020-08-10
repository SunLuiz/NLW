//servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')
//nunjucks(template engine)
const nunjucks = require('nunjucks')//configurar nunjucks
nunjucks.configure('src/views',{
    express:server,
    noCache:true,
})

server
.use(express.static("public")) //configurar arquivos estaticos "css, scripts, imagens"
//Rotas da Aplicacao
.get("/",pageLanding)
.get("/study2", pageStudy)
.get("/give-classes2", pageGiveClasses)
//startserver
.listen(5500)