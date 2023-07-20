const express = require('express');
const app = express();

const librosRouter = require('./routes/libros');
const errorHandler = require('./middlewares/errorHandler');


app.use(express.json());
app.use('/libros', librosRouter);

app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`El servidor esta iniciado en el puerto ${PORT}`)
});

app.get("/", (req, res) => {
    res.send("API de Libros")
});
