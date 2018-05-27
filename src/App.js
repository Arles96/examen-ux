import React, { Component } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Menu from './Components/Menu/Menu'
import Home from './Components/Home/Home'
import firebase, {database} from 'firebase'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'
import Message from './Components/Message/Message'
import Wall from './Components/Wall/Wall'

//https://templated.co/industrious
class App extends Component {

  constructor(){
    super()
    this.state = {
      menu : false,
      user : null,
      google : "Google",
    }
    this.handleMenu = this.handleMenu.bind(this)
    this.handleOpenMenu = this.handleOpenMenu.bind(this)
    this.handleCloseMenu = this.handleCloseMenu.bind(this)
    this.handleLoginGoogle = this.handleLoginGoogle.bind(this)
    this.handleProfile = this.handleProfile.bind(this)
    this.handleAddMessage = this.handleAddMessage.bind(this)
  }

  handleAddMessage(e){
    e.preventDefault()
    database().ref("message").push({
      uid : this.state.user.uid,
      title : e.target.titulo.value,
      mensaje : e.target.mensaje.value,
      estado : e.target.estado.value,
      email : this.state.user.email
    })
    e.target.titulo.value = ""
    e.target.mensaje.value = ""
    alert("Se ha agregado un mensaje")
  }

  handleLoginGoogle(){
    if (this.state.user){
      firebase.auth().signOut()
        .then(result => console.log(`${result} ha salido`))
        .catch(err =>  console.log(err))
      this.setState({user : null, google: "Google"})
    }else {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then(res => {
          this.setState({
            user : res.user
          })
          this.setState({google : "Logout Google"})
        })
        .catch(err=> console.log("error: "+err))
        
    }
  }

  handleOpenMenu(){
    this.setState({
      menu : true
    })
  }

  handleCloseMenu(){
    this.setState({
      menu : false
    })
  }

  handleMenu(){
    if (this.state.menu){
      return (
          <Menu 
            event1={this.handleCloseMenu} 
            event2={this.handleLoginGoogle} 
            user={this.state.user}
          />
      )
    }
  }

  handleProfile(){
    if (this.state.user){
      return (
        <div>
          <Profile 
            user={this.state.user}
          />
          <Message
            event={this.handleAddMessage}
          />
          <Wall
            user={this.state.user}
          />
        </div>
      )
    }else {
      return(
        <Login 
          event1={this.handleLoginGoogle}
          name1={this.state.google}
        />
      )
    }
  }

  render() {
    return (
      <div>
        <Navbar event={this.handleOpenMenu} />
        <Home />
        {this.handleProfile()}
        {this.handleMenu()}
        <footer className="bg-dark" >
          By Arles cerrato
        </footer>
      </div>
    )
  }
}

export default App
