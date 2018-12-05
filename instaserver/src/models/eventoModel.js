const {Schema, mongoose} = require("../database/database");
var eventoSchema = new Schema({
    fecha: { type: Date, required: true },
    tipoEvento: { type: String, required: true },
    descripcion: { type: String, required: true},
    ubicacion: { type: Array, required: true},
    userIdCreator: {type: String, required: true}
})

var EventoSchema = mongoose.model("Event", eventoSchema)

module.exports = EventoSchema