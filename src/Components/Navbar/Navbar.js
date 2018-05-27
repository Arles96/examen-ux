import React, {Component} from 'react'
import './Navbar.css'

class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark row nav-menu pl-0 pr-0" >
                <div className="col-6 nav-color" >
                    <a className="nav-link">ForeX</a>
                </div>
                <div className="col-6 text-right nav-item pr-1" >
                    <div className="nav-color2 m-0">
                        <a className="nav-link link-menu m-0" onClick={this.props.event} >
                            <i className="fas fa-bars mr-1"></i> Menu
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar