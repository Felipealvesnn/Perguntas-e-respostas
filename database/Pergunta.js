const sequeliza = require("sequelize");
const connection = require("./database");
 
const pergunta = connection.define('pergunta', {
    titulo :{
        type: sequeliza.STRING,
        alloNull: false
    },
    descricao:{
        type: sequeliza.TEXT,
        alloNull: false
    }

});

pergunta.sync({force:false}).then(()=>{
    console.log('tabela criada');
})

module.exports = pergunta;
