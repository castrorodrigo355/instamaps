import React, { Component } from 'react';
import { Card, CardTitle, Table } from 'reactstrap';
import jwt_decode from 'jwt-decode';
import "./App.css"

class EventsTableUser extends Component {

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         tipoEvento: "",
    //         descripcion: ""
    //     }
    // }

    // crearEvento = (e) =>{
    //     e.preventDefault()
    //     let token = localStorage.getItem('token');
    //     var decoded = jwt_decode(token);
    //     const id = decoded.userId;
    //     const userEmail = decoded.email;
    //     fetch(`http://localhost:3000/eventos`, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //                             fecha: new Date(),
    //                             tipoEvento: this.state.tipoEvento,
    //                             descripcion: this.state.descripcion,
    //                             ubicacion: this.props,
    //                             userEmail: userEmail,
    //                             userIdCreator: id}),
    //         headers: {
    //             token,
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         this.setState({
    //             tipoEvento: "",
    //             descripcion: "",
    //             ubicacion: ""
    //         })
    //     })
    //     .catch(err => console.error(err));
    // }

    // handlerChange = (e) => {
    //     const {value, name} = e.target;
    //     console.log(name, value)
    //     this.setState({
    //         [name]: value
    //     });
    //   }

    asistirAEvento(idEvento){
        let token = localStorage.getItem('token');
        const decoded = jwt_decode(token);
        const idUser = decoded.userId;
        fetch(`http://localhost:3000/eventos/${idEvento}/invitados`, {
            method: 'POST',
            body: JSON.stringify({
                                    idUser
                                }),
            headers: {
                token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log("Invitado agregado")
        })
        .catch(err => console.error(err));
    }

    bajarseDelEvento(idEvento){
        let token = localStorage.getItem('token');
        const decoded = jwt_decode(token);
        const idUser = decoded.userId;
        fetch(`http://localhost:3000/eventos/${idEvento}/invitados/${idUser}`, {
            method: 'DELETE',
            headers: {
                token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }   
        })
        .then(res => res.json())
        .then(response => {
            console.log(response)   // Uncaught (in promise) SyntaxError: Unexpected end of JSON input at eval (Tweets.js:83)
        });
        // this.obtenerTweets()
    }

    render() {
        const { eventos } = this.props
        let token = localStorage.getItem('token');
        const decoded = jwt_decode(token);
        const idUser = decoded.userId
        const eventosNotOwner = eventos.filter(evento => evento.userIdCreator !== idUser)
        return (
            <div className="accordion message-form-left" id="accordionExample" role="tablist" aria-multiselectable="true" style={{margin:"10px", padding:"5px"}}>
              <div className="card bg-transparent" style={{marginBottom:"5px"}}>
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <h4><span className="badge badge-pill badge-danger">Listado de eventos</span></h4>
                            </button>
                        </h5>
                    </div>
                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            <Card body style={{marginBottom:"10px"}} className="message-form-left">
                                <CardTitle>Eventos</CardTitle>
                                <Table dark>
                                    <thead>
                                        <tr>
                                            <th>Fecha</th>
                                            <th>Evento</th>
                                            <th>Usuario</th>
                                            <th>Opciones</th>
                                        </tr>
                                    </thead>
                                    {
                                        eventosNotOwner.map((unEvento, i) => {
                                        return(
                                            <tbody key={i}>
                                            <tr>
                                                <td>{unEvento.fecha}</td>
                                                <td>{unEvento.tipoEvento}</td>
                                                <td>{unEvento.userEmail}</td>
                                                {
                                                    
                                                    (unEvento.invitadosId.map(invitado => invitado.idUser)).includes(idUser) ?
                                                    <td>
                                                        <button onClick={this.bajarseDelEvento.bind(this, unEvento._id)} type="submit" className="btn btn-primary bg-danger">Bajarse</button>
                                                    </td> :
                                                    <td>
                                                        <button onClick={this.asistirAEvento.bind(this, unEvento._id)} type="submit" className="btn btn-primary bg-primary">Asistir</button>
                                                    </td>
                                                }
                                            </tr>
                                            </tbody>
                                        )
                                        })
                                    }
                                </Table>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventsTableUser;