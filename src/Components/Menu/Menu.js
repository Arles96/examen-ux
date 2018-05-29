import React, {Component} from 'react'
import './Menu.css'

export default class Menu extends Component {

    constructor(){
        super()
        this.handleUser = this.handleUser.bind(this)
    }

    handleUser(){
        if (this.props.user){
            return (
                <div>
                    <li className="nav-item link-menu" >
                        <a href="#perfil" className="nav-link">Perfil</a>
                    </li>
                    <hr className="hr" />
                    <li className="nav-item link-menu" >
                        <a  href="#mensaje" className="nav-link">Nuevo Mensaje</a>
                    </li>
                    <hr className="hr" />
                    <li className="nav-item link-menu" >
                        <a  href="#muro" className="nav-link">Mensajes</a>
                    </li>
                    <hr className="hr" />
                    <li onClick={this.props.event2} className="nav-item link-menu" >
                        <a className="nav-link">SignOut</a>
                    </li>
                </div>
            )
        }else {
            return (
                <li className="nav-item link-menu" >
                    <a href="#autenticacion" className="nav-link">Autenticación</a>
                </li> 
            )
        }
    }

    render(){
        return (
            <nav className="animated bounceInRight menu-deploy bg-dark" >
                <div className="text-right menu-top" >
                    <i onClick={this.props.event1} className="menu-button fas fa-times-circle"></i>
                    </div>
                <ul className="nav flex-column nav-color2">
                    <li className="nav-item link-menu" >
                        <a href="#Home" className="nav-link">Home</a>
                    </li>
                    <hr className="hr" />                   
                    {this.handleUser()}
                </ul>
            </nav>
        )
    }

}