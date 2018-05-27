import React, {Component} from 'react'
import './Menu.css'

export default class Menu extends Component {

    render(){
        return (
            <nav className="animated bounceInRight menu-deploy bg-dark" >
                <div className="text-right menu-top" >
                    <i onClick={this.props.event} class="menu-button fas fa-times-circle"></i>
                    </div>
                <ul className="nav flex-column nav-color2">
                    <li className="nav-item link-menu" >
                        <a className="nav-link">Home</a>
                    </li>
                    <hr/>
                    <li className="nav-item link-menu" >
                        <a className="nav-link">Autenticación</a>
                    </li>
                    <hr/>
                    <li className="nav-item link-menu" >
                        <a className="nav-link">Nuevo Mensaje</a>
                    </li>
                    <hr/>
                    <li className="nav-item link-menu" >
                        <a className="nav-link">Perfil</a>
                    </li>
                </ul>
            </nav>
        )
    }

}