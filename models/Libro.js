const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/biblioteca", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const libroSchema = new mongoose.Schema({
    nombre: String,
    producto: String,
    email: String
}, { collection: 'Libros' });

const Libro = mongoose.model('Libro', libroSchema);

module.exports = Libro;
