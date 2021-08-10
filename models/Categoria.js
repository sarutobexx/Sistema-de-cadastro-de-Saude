const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const Categoria = new Schema({

    nome:{
        type: String,
        required: true
    },
    nomemae: {
       type: String,
       required: true
    },
    nascimento:{
        type: String,
       required: true
    },
    sexo:{
        type: String,
        required: true
    },
    cor:{
        type: String,
       required: true
    },
    deficiencia:{
        type: String,
       required: true
    },
    email:{
        type: String,
       required: true
    },
    telefonefixo:{
        type: String,
        required: false
    },

    celular:{
        type: String,
        required:true
    },

    fisico:{
        type: Number,
        required: true

    },

    cpf:{
        type: String,
        required: true
    },

    sus:{
        type: String,
        required: true
    },

    cep:{
        type: String,
        required: true
    },

    rua:{
       type: String,
       required: true
    },

    numero:{
        type: Number,
        required: true
    
    },
    
    complemento:{
        type:String,
        required: false

    },

    bairro:{
        type:String,
        required: true
    },

    cidade:{
        type:String,
        required: true
    },

    estado:{
        type:String,
        required: true
    },
    comprovanteendereco:{
        type: String,
        requided: true
    },

    //comprovante de residencia pendente

    date:{
        type: Date,
        default: Date.now()
    }




    })

    mongoose.model('categorias', Categoria)