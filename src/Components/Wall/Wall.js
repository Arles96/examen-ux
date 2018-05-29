import React, {Component} from 'react'
import {database} from 'firebase'
import './Wall.css'

export default class Wall extends Component {

    constructor(){
        super()
        this.state = {
            ms : []
        }
    }

    componentDidMount(){
        database().ref("message").on("value", (data)=> {
            let list = []
            data.forEach( doc => {
                if (doc.val().estado==="publico"){
                    list.push(doc.val())
                    this.setState({
                        ms : list
                    })
                }else {
                    if (doc.val().uid===this.props.user.uid){
                        list.push(doc.val())
                        this.setState({
                            ms : list
                        })
                    }
                }                
            })
        })
    }

    render(){
        let data = this.state.ms.map((doc, i)=> {
            return (
                <div key={i} className="container-fluid text-center" >
                    <div className="card">                    
                        <div className="card-body">
                            <h5 className="card-title text-center">Titulo: {doc.title}</h5>
                            <div className="container text-center" >
                                <i className="img-card fas fa-envelope-square"></i>
                            </div>
                            <p>Correo: {doc.email}</p>
                            <p>Estado: {doc.estado}</p>
                            <br/>
                            <p>Mensaje: {doc.mensaje}</p>
                        </div>
                    </div>
                    <br/>
                </div>
            )
        })
        return(
            <div id="muro" className="container" >
                <br/>
                <hr/>
                <br/>
                <h2 className="text-center" >Mensajes</h2>
                <br/>
                {data}
            </div>
        )
    }

}