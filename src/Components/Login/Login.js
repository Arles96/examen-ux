import React, {Component} from 'react'
import './Login.css'

export default class Login extends Component {

    constructor(){
        super()
        this.handleGoogle = this.handleGoogle.bind(this)
    }

    handleGoogle(){
        if(this.props.name1){
            return (
                <button onClick={this.props.event1} className="btn btn-secondary btn-block">
                    {this.props.name1}
                </button>
            )
        }
    }    

    render(){
        return (
            <div id="autenticacion" className="login" >
                <h2 className="text-center mx-auto" >Autenticación</h2>
                <p className="mx-auto" >
                    Para poder usar esta aplicación debe de iniciar sesión con 
                    los siguiente proveedor:
                </p>
                {this.handleGoogle()}
            </div>
        )
    }

}