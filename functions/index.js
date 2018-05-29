
const functions = require('firebase-functions')
const admin = require('firebase-admin')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

admin.initializeApp()
const database = admin.database

exports.helloWorld = functions.https.onRequest((request, response) => {
  var uid = request.query.text
  database().ref("usuario/"+uid).set({
    publico : 0,
    privado : 0
  })
  //Obteniendo las cantidades de msg publicos y privados
  return database().ref("message").on("value", (snapshot)=> {
    var public = 0
    var private = 0
    snapshot.forEach(doc => {
      if (doc.val().uid === uid){
        console.log(doc.val())
        if (doc.val().estado==="publico"){
          public++
          console.log("Hola Publico")
          database().ref("usuario/"+uid).set({
            publico : public,
            privado : private
          })
        }else {
          console.log("Hola privado")
          private++
          database().ref("usuario/"+uid).set({
            publico : public,
            privado : private
          })
        }
      }
    })
  })  
})


