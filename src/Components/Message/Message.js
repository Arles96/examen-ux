import React, {Component} from 'react'

export default class Message extends Component {
    
    render(){
        return(
            <div id="mensaje" className="container animated bounceInDown" >
                <hr/>
                <h2 className="text-center">Agregar Mensaje</h2>
                <br/>
                <form onSubmit={this.props.event} >
                    <div className="form-group" >
                        <label>Titulo</label>
                        <input type="text" className="form-control" name="titulo" placeholder="Agrega un titulo" />
                    </div>
                    <div className="form-group" >
                        <label>Mensaje</label>
                        <textarea rows="4" placeholder="Agregue mensaje" className="form-control" cols="50" name="mensaje" >

                        </textarea>
                    </div>
                    <div className="form-group">
                        <label>Estado</label>
                            <select name="estado" className="form-control" >
                                <option value="publico">Publico</option>
                                <option value="privado">Privado</option>
                            </select>
                        </div>
                    <input type="submit" className="btn btn-primary btn-block" />
                </form>
            </div>
        )
    }
}