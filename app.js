const express = require('express');
const app = express();

const librosRouter = require('./routes/libros');
const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require('./middlewares/errorHandler');

const jwtCheck = auth({
    audience: 'https://127.0.0.1:3000/api/libros',
    issuerBaseURL: 'https://dev-migueln794.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});


app.use(jwtCheck);
app.use(express.json());
app.use('/libros', jwtCheck, librosRouter);
app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`El servidor esta iniciado en el puerto ${PORT}`)
});

app.get("/", (req, res) => {
    res.send("API de Libros")
});
