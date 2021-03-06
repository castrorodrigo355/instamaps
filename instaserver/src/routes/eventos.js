const express = require("express");
const Evento = require("../models/eventoModel")
const router = express.Router();
//const routerVuelos = require("./vuelos")

// CREAR UN EVENTO
router.post("/", (req, res) => {
    let data = req.body;
    let evento = new Evento(data);
    evento.save()
        .then(result => res.status(201).json(result))
        .catch(err => res.status(503).json(err));
})

// OBTENER LA LISTA DE EVENTOS
router.get("/", (req, res) => {
    Evento.find({}).then(eventos => res.json (eventos));
})

// OBTENER UN DETERMINADO EVENTO MEDIANTE UN "id"
router.get("/:id", (req, res) => {
    Evento.findById(req.params.id)
        .then(evento => {
            if (evento){
                res.json(evento)
            } else {
                res.status(404).json({ message: 'not found!'})
            }
        });
})

// ELIMINAR UN DETERMINADO EVENTO MEDIANTE UN "id"
router.delete("/:id", (req, res) => {
    Evento.findByIdAndDelete(req.params.id)
        .then( result => res.status(204).json({ messsage: 'deleted!'}))
        .catch( err => res.status(503).json(err));
})

// DADO UN EVENTO "idEvento", OBTENER LA LISTA DE INVITADOS
router.get("/:idEvento/invitados", (req, res) => {
    Evento.findById(req.params.idEvento)
        .then( evento => res.json(evento.invitadosId))
        .catch( err => res.status(503).json(err));
})

// DADO UN EVENTO "idEvento", AGREGAR UN INVITADO "idUser"
router.post("/:idEvento/invitados", (req, res) => {
    let idUser = req.body;
    Evento.findOne({_id: req.params.idEvento}, (err, evento) => {
        err ? res.json(err) :
        evento.invitadosId.push(idUser)
        evento.save()
            .then(result => res.status(201).json(result))
            .catch(err => res.status(503).json(err));
    })
})

// DADO UN EVENTO "idEvento", ELIMINAR UN INVITADO "idUser"
router.delete("/:idEvento/invitados/:idUser", (req, res) => {
    // let idUser = req.body;
    Evento.findOne({_id: req.params.idEvento}, (err, evento) => {
        err ? res.json(err) :
        evento.invitadosId = evento.invitadosId.filter(invitado => invitado.idUser != req.params.idUser)
        evento.save()
            .then(result => res.status(201).json(result))
            .catch(err => res.status(503).json(err));
    })
})

// // ACTUALIZAR UN DETERMINADO USUARIO MEDIANTE UN "id"
// router.put("/:id", (req, res) => {
//     User.findByIdAndUpdate(req.params.id, {$set: {"email": req.body.email, 
//                                                   "username": req.body.username,
//                                                   "password": req.body.password
//                                                   }}, {new: true}, (err, doc) => {
//         err ? res.json(err) : res.json(doc)
//     })
// })

// router.use("/:id/vuelos", routerVuelos)

module.exports = router;