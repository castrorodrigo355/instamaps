import React, { Component } from 'react';
import { Card, Button, CardTitle, Form, FormGroup, Label, Input } from 'reactstrap';
import jwt_decode from 'jwt-decode';
// import { BrowserRouter, Route } from "react-router-dom"
// import Acceso from './Acceso';
import "./App.css"

class FormCreateEvent extends Component {

    constructor(props){
        super(props)
        this.state = {
            tipoEvento: "",
            descripcion: ""
        }
    }

    crearEvento = (e) =>{
        e.preventDefault()
        let token = localStorage.getItem('token');
        var decoded = jwt_decode(token);
        const id = decoded.userId;
        const userEmail = decoded.email;
        fetch(`http://localhost:3000/eventos`, {
            method: 'POST',
            body: JSON.stringify({
                                fecha: new Date(),
                                tipoEvento: this.state.tipoEvento,
                                descripcion: this.state.descripcion,
                                ubicacion: this.props,
                                userEmail: userEmail,
                                userIdCreator: id}),
            headers: {
                token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                tipoEvento: "",
                descripcion: "",
                ubicacion: ""
            })
        })
        .catch(err => console.error(err));
    }

    handlerChange = (e) => {
        const {value, name} = e.target;
        console.log(name, value)
        this.setState({
            [name]: value
        });
      }

    render() {
        const { ubicacion } = this.props
        return (
            <div className="accordion message-form-right" id="accordionExample" role="tablist" aria-multiselectable="true" style={{margin:"10px", padding:"5px"}}>
                
                <div className="card bg-transparent" style={{marginBottom:"5px"}}>
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <h4><span className="badge badge-pill badge-danger">Crear Evento</span></h4>
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            <Card body style={{marginBottom:"10px"}} className="message-form-left">
                                <CardTitle>Ingrese los datos correspponientes</CardTitle>
                                <Form onSubmit={this.crearEvento}>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                        <Label for="tipoEvento" className="mr-sm-2">Tipo Evento</Label>
                                        <Input onChange={this.handlerChange} value={this.state.tipoEvento} type="text" name="tipoEvento" id="tipoEvento" placeholder="..." />
                                    </FormGroup>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                        <Label for="descripcion" className="mr-sm-2">Descripcion</Label>
                                        <Input onChange={this.handlerChange} value={this.state.descripcion} style={{marginBottom:"5px"}} type="textarea" name="descripcion" id="descripcion" placeholder="..." />
                                    </FormGroup>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                        <Label for="Ubicacion" className="mr-sm-2">Ubicacion</Label>
                                        <Input disabled onChange={this.handlerChange} value={ubicacion} style={{marginBottom:"5px"}} type="text" name="ubicacion" id="ubicacion" placeholder="Ubicacion" />
                                    </FormGroup>
                                    <Button type="submit" color="info">Send</Button>{' '}
                                </Form>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormCreateEvent;