import mongoose from "mongoose"

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}.ect5b.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`);

let db = mongoose.connection;

export default db;