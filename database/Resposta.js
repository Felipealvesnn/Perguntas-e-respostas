const sequelize = require("sequelize");
const connection = require("./database");

const Resposta= connection.define("respostas",{
    corpo:{
        type: sequelize.TEXT,
        allowNull: false
    },
    perguntaid:{

        type: sequelize.INTEGER,
        allowNull: false
    }
})

Resposta.sync({force:false}).then(()=>{
    console.log('tabela resposta criada');
})
module.exports=Resposta; 