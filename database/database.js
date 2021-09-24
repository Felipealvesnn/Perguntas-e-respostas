const sequelize = require('sequelize');
const conection = new sequelize('guiaperguntas', 'root', '1994cao', {
    root: 'localhost',
    dialect: 'mysql',
    //logging: false
});
module.exports= conection;