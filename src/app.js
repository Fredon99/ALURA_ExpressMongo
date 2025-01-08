import express from "express";

const app = express();

const livros = [{
    id: 1,
    title: "Ice Age 2"
},{
    id: 2,
    title: "O Hobbit"
}]

function buscaLivro(id) {
    return livros.findIndex((livro) => livro.id === Number(id))
}

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

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
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