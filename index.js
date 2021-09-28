const express = require("express");
const app = express();
const connection = require("./database/database"); //database
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

connection
    .authenticate()
    .then(() => {
        console.log("conexao feita com banco de dados!")
    })
    .catch((msgErro) => {
        console.log(msgErron);
    })

app.set('view engine', 'ejs'); //estou dizendo para o express usar o EJS como view engine
app.use(express.static('public'));
//bodyparser
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//rotas
app.get("/", (req, res) => {
    Pergunta.findAll({
        raw: true,
        order: [
            ['id', 'DESC']
        ]
    }).then(Pergunta => {
        console.log(Pergunta);
        res.render("index", {
            Pergunta: Pergunta
        });
    }).catch((msgErro) => {
        console.log(msgErron);
    })


});
app.get("/perguntar", (req, res) => {

    res.render("perguntar");
});

app.post("/SalvarPerguntar", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    })

});

app.get("/perguntares/:id", (req, res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where: {
            id: id
        }
    }).then(pergunta => {
        if (pergunta != undefined) {
            res.render("perguntares", {
                pergunta: pergunta
            });

        } else {
            res.redirect("/")

        }
    })
});

app.listen(8080, () => {
    console.log("app rodandono");
});