import React, {Component} from 'react'
import './Login.css'

export default class Login extends Component {

    constructor(){
        super()
        this.handleFacebook = this.handleFacebook.bind(this)
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

    handleFacebook(){
        if (this.props.name2){
            return (
                <button onClick={this.props.event2} className="btn btn-primary btn-block">
                    {this.props.name2}
                </button>
            )
        }
    }

    

    render(){
        return (
            <div className="login" >
                <h2 className="text-center mx-auto" >Autenticación</h2>
                <p className="mx-auto" >
                    Para poder usar esta aplicación debe de iniciar sesión con 
                    los siguientes proveedores:
                </p>
                {this.handleGoogle()}
                {this.handleFacebook()}    
            </div>
        )
    }

}