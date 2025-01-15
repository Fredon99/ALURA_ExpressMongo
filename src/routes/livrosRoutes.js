import express from 'express';
import LivroController from '../controllers/livroController.js';


const routes = express.Router()
//express busca as rotas na sequencia - sempre adicionar da maior complexidade para menor
routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);
routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.post("/livros", LivroController.cadastroLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletarLivro);



export default routes;