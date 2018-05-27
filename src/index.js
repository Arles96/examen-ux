import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDC92m7jymyyqAB-OXAy6Yhtvlon8nbM9A",
    authDomain: "forex-b615d.firebaseapp.com",
    databaseURL: "https://forex-b615d.firebaseio.com",
    projectId: "forex-b615d",
    storageBucket: "forex-b615d.appspot.com",
    messagingSenderId: "289059077769"
}

firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
