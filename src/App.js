import React, { Component } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Menu from './Components/Menu/Menu'
import Home from './Components/Home/Home'
import firebase from 'firebase'
import Login from './Components/Login/Login'

//https://templated.co/industrious
class App extends Component {

  constructor(){
    super()
    this.state = {
      menu : false,
      user : null,
      google : "Google",
      facebook : "Facebook"
    }
    this.handleMenu = this.handleMenu.bind(this)
    this.handleOpenMenu = this.handleOpenMenu.bind(this)
    this.handleCloseMenu = this.handleCloseMenu.bind(this)
    this.handleLoginGoogle = this.handleLoginGoogle.bind(this)
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({user})
    })
  }

  handleLoginGoogle(){
    if (this.state.user){
      firebase.auth().signOut()
        .then(result => console.log(`${result.user.email} ha salido`))
        .catch(err =>  console.log(err))
      this.setState({user : null, google: "Google", facebook:"Facebook"})
    }else {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then(result => {
          this.setState({google : "Logout Google", facebook: null})
        })
        .catch(err=> console.log(err))
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
          <Menu event={this.handleCloseMenu} />
      )
    }
  }

  render() {
    return (
      <div>
        <Navbar event={this.handleOpenMenu} />
        <Home />
        <Login 
          event1={this.handleLoginGoogle}
          name1={this.state.google}
          name2={this.state.facebook}
        />
        {this.handleMenu()}
      </div>
    )
  }
}

export default App
