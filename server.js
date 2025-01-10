
//sempre faço a importação do dotenv na camada mais externa da aplicação
import "dotenv/config"
import app from "./src/app.js"

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} ...`);
})