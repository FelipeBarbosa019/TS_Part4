const express = require("express");
const cors = require("cors");
const router = require("./router.js");

const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("./public/"));
app.use(router);

app.listen(port, (err) => {
    if (err) {
        console.log("Problema na conexão com o servidor");
    } else {
        console.log(`Servidor ativo na porta: ${port}`);
    }
});
