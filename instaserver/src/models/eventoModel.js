const {Schema, mongoose} = require("../database/database");
const User = require("./usuarioModel")
var eventoSchema = new Schema({
    fecha: { type: Date, required: true },
    tipoEvento: { type: String, required: true },
    descripcion: { type: String, required: true},
    ubicacion: { type: Array, required: true},
    invitadosId: { type: Array, required: true}, // ESTA ES LA NUEVA LINEA AGREGADA DE INVITADOS A UN EVENTO
    userEmail: { type: String, required: true},
    userIdCreator: {type: String, required: true}
})

var EventoSchema = mongoose.model("Event", eventoSchema)

module.exports = EventoSchema