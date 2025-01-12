import express from 'express';
import livros from './livrosRoutes.js'


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send("Curso de Node.js")
    })

    //middleware utilizado para converter arquivos do body do método post para json (geralmente chega como string) e aponta para o arquivo de rotas
    app.use(express.json(), livros);
};

export default routes;