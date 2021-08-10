//carregando módulos 
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer')
const upload = multer ({dest:'uploads/'})



//config

//body Parser
app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json())
//handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set ('view engine', 'handlebars')

//mongoose
mongoose.connect('mongodb+srv://Saude:pre1958@saude.5ss1r.mongodb.net/test').then(()=>{
      console.log('conectado ao mongodb')}).catch((err)=>{
                    console.log('erro ao se conectar'+err)
})
//public
app.use(express.static(path.join(__dirname,'public')))
//rotas
app.use('/', admin)



//outros
const PORT = 3000
app.listen(PORT,()=>{
console.log('servidor rodando')

})


