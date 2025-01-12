import express from "express";
import dbConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await dbConnect();

conexao.on("error", (error) => {
    console.error("Erro de conexao", error)
})

conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso.")
})

const app = express();
routes(app);

//setando o header de maneira global
app.use((req,res,next) => {
    res.header("Content-Type","application/json");
    res.header('X-Powered-By', 'Node.js');
    next()
})

app.delete("/livros/:id", (req,res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
})

export default app;

