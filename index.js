const express = require("express");
const app = express();

app.set('view engine', 'ejs'); //estou dizendo para o express usar o EJS como view engine
app.use(express.static('public'));
//bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//rotas
app.get("/", (req, res) => {
    //var nome= req.params.nome;

    res.render("index");
});
app.get("/view/perguntar", (req, res) => {

    res.render("perguntar");
});

app.post("/SalvarPerguntar", (req, res) => {
    var titulo= req.body.titulo;
    var descricao= req.body.descricao;
    res.send("formulario recebido!! "+ titulo +"  "+ "descricao"+ descricao);

});


app.listen(8080, () => {
    console.log("app rodandono");
});

function clicar(){
    window.alert("tu cliocu");
}