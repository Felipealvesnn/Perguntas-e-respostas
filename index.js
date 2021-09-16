const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    //var nome= req.params.nome;

    res.render("index");
});
app.get("/view/perguntar", (req, res) => {

    res.render("perguntar");
});

app.post("/SalvarPerguntar", (req, res)=>{
    res.send("formulario recebido!! ");

});


app.listen(8080, () => {
    console.log("app rodandono");
});