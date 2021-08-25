const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Categoria')
const Categoria = mongoose.model('categorias')
const multer = require('multer')

//multer
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
      cb(null, 'uploads/')

    },
    filename: (req, file, cb) =>{

        cb(null, Date.now()+'-'+file.originalname)


    }


})

const upload = multer({storage})

router.get('/', (req, res) =>{

    res.render("admin/index")
})





router.post('/nova/upload', upload.array('img', 3), (req, res) =>{
    const novaCategoria = {
        nome: req.body.nome,
        nomemae: req.body.nomemae,
        nascimento: req.body.nascimento,
        genero: req.body.genero,
        etnia: req.body.etnia,
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
        img: fileOriginalname(req.files)

        
    }
    

    function fileOriginalname(file) {
        arrayOriginalname = []
        
       
        for (var i = 0; i < file.length; ++i) {
         
        
         var exemplo = file[i]["originalname"]
           
           arrayOriginalname.push(exemplo)
        
    

        }

        return(arrayOriginalname)
        

    }
   

   




    new Categoria(novaCategoria).save().then(()=>{
        console.log('categoria salva com sucesso')
        res.render("admin/categorias")
        
      
        console.log(req.body, req.files)
        
    }).catch((err)=>{
        console.log('falha ao salvar categoria'+err)
        res.render("admin/addcategorias")

    })
     

})

module.exports = router 