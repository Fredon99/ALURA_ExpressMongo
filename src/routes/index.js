import express from 'express';
import livros from './livrosRoutes.js'
import autores from './autoresRoutes.js'


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send("Curso de Node.js")
    })

    //setando o header de maneira global
    app.use((req,res,next) => {
        res.header("Content-Type","application/json");
        res.header('X-Powered-By', 'Node.js');
        next()
    })

    //middleware utilizado para converter arquivos do body do método post para json (geralmente chega como string) e aponta para o arquivo de rotas
    app.use(express.json(), livros);
    app.use(express.json(), autores);
};

export default routes;