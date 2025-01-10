import express from "express";
import dbConnect from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await dbConnect();

conexao.on("error", (error) => {
    console.error("Erro de conexao", error)
})

conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso.")
})

const app = express();

//setando o header de maneira global
app.use((req,res,next) => {
    res.header("Content-Type","application/json");
    res.header('X-Powered-By', 'Node.js');
    next()
})

//middleware utilizado para converter arquivos do body do método post para json (geralmente chega como string)
app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
})

app.post("/livros" , (req,res) => {
    livros.push(req.body);
    res.status(201).send("Livro adicionado com sucesso");
})

app.get("/livros/:id", (req,res) => {
    const index = req.params.id
    const livro = livros[buscaLivro(index)]
    res.status(200).json(livro)
})

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id)
    livros[index].title = req.body.title;
    res.status(200).json(livros)
})

app.delete("/livros/:id", (req,res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
})

export default app;

