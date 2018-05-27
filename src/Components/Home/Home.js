import React, {Component} from 'react'
import './Home.css'

export default class Home extends Component {

    render(){
        return (
            <div id="Home" className="main" > 
                <div className="center" >
                    <h1 className="text-center" >Bienvenido a ForeX</h1>
                    <p className="text-center">
                        Esta aplicación web es exclusivamente para la 
                        clase de Experiencia de usuario de la Universidad 
                        Tecnologica de Honduras (Unitec).
                    </p>
                </div>
            </div>
        )
    }

}