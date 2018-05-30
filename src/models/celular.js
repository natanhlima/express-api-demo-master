const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CelularSchema   = new Schema({
    nome: String,
    nota: Number,
    marca: String,
    cor: String,
});

module.exports = mongoose.model('Celular', CelularSchema);