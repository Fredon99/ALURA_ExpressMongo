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


export default app;

