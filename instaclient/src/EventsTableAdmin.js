import React, { Component } from 'react';
import { Card, CardTitle, Table } from 'reactstrap';
import "./App.css"

class EventsTable extends Component {

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

    render() {
        const { eventos } = this.props
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
                                        </tr>
                                    </thead>
                                    {
                                        eventos && eventos.map((unEvento, i) => {
                                        return(
                                            <tbody key={i}>
                                            <tr>
                                                <td>{unEvento.fecha}</td>
                                                <td>{unEvento.tipoEvento}</td>
                                                <td>{unEvento.userEmail}</td>
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

export default EventsTable;