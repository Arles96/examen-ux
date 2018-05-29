import React, {Component} from 'react'
import './Profile.css'
import {database} from 'firebase'

export default class Profile extends Component {

    constructor(){
        super()
        this.state = {
            public : 0,
            private : 0
        }
    }

    componentDidMount(){
        database().ref("usuario/"+this.props.user.uid).on("value", (snapshot)=> {
            this.setState({
                public : snapshot.val().publico,
                private : snapshot.val().privado
            })
        })
    }

    render(){
        return(
            <div id="perfil" className="container profile animated bounceInDown" >
                <h2 className="text-center" > Perfil </h2>
                <div className="row">
                    <div className="col-3">
                        <img className="img-profile" src={this.props.user.photoURL} alt="foto"/>
                    </div>
                    <div className="col-9" >
                        <br/>
                        <p><b>Nombre:</b> {this.props.user.displayName}</p>
                        <br/>
                        <p><b>Email</b>: {this.props.user.email}</p>
                        <br/>
                        <p><b>Mensajes Publicos:</b> {this.state.public}</p>
                        <br/>
                        <p><b>Mensajes Privados:</b> {this.state.private} </p>
                    </div>
                </div>
            </div>
        )
    }

}