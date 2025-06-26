import mongoose from "mongoose"

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}.woeupll.mongodb.net/?retryWrites=true&w=majority&appName=Alura`);

let db = mongoose.connection;

export default db;