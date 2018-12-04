import React, { Component } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import './Acceso.css';

class Acceso extends Component {

    render(){
        return (
            <div className="Acceso">
                
                <div className="accordion" id="accordionExample" role="tablist" aria-multiselectable="true" style={{margin:"10px", padding:"5px"}}>

                    <div className="card bg-transparent" style={{marginBottom:"5px"}}>
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                <h4><span className="badge badge-pill badge-info">Iniciar sesion</span></h4>
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                                <SignIn/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card bg-transparent">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h4><span className="badge badge-pill badge-info">Registrarse</span></h4>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                                <SignUp/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Acceso;