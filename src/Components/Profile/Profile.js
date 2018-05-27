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

    componentWillMount(){
        database().ref("message").on("value", (data)=> {
            this.setState({
                public : 0,
                private : 0
            })
            data.forEach( doc => {
                if (doc.val().uid===this.props.user.uid){
                    if (doc.val().estado==="publico"){
                        this.setState({
                            public : this.state.public + 1
                        })
                    }else {
                        this.setState({
                            private : this.state.private + 1
                        })
                    }
                }
            })
        })
    }

    render(){
        return(
            <div id="perfil" className="container profile animated bounceInDown" >
                <h2 className="text-center" > Perfil </h2>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="img-profile" src={this.props.user.photoURL} alt="foto"/>
                    </div>
                    <div className="col-sm-6" >
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