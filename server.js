import http from "http";

const PORT = 8000;

const rotas = {
    "/" : "Curso de Node.js",
    "/autores" : "Entrei na rota autores",
    "/livros" : "Entrei na rota livros"
}

const server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(rotas[req.url]);
})

server.listen(PORT, () => {
    console.log("Servidor escutando ...");
})