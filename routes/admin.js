const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Categoria')
const Categoria = mongoose.model('categorias')
const multer = require('multer')
const upload = multer ({dest:'uploads/'})


router.get('/', (req, res) =>{

    res.render("admin/index")
})



router.post('/nova/upload', upload.array('img', 3), (req, res) =>{
    const novaCategoria = {
        nome: req.body.nome,
        nomemae: req.body.nomemae,
        nascimento: req.body.nascimento,
        sexo: req.body.sexo,
        cor: req.body.cor,
        deficiencia: req.body.deficiencia,
        email: req.body.email,
        telefonefixo: req.body.telefonefixo,
        celular: req.body.celular,
        fisico: req.body.fisico,
        cpf: req.body.cpf,
        sus: req.body.sus,
        cep: req.body.cep,
        rua: req.body.rua,
        numero: req.body.numero,
        complemento: req.body.complemento,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado, 
        comprovanteendereco: req.body.comprovanteendereco,
    }

    new Categoria(novaCategoria).save().then(()=>{
        console.log('categoria salva com sucesso')
        res.render("admin/addcategorias")
        
    }).catch((err)=>{
        console.log('falha ao salvar categoria'+err)
    })
     

})

module.exports = router 