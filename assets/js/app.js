// Initialize Firebase
var config = {
    apiKey: "AIzaSyCv_bBT5ZnpSWTi6SwvhCaeqszkxrBGhp8",
    authDomain: "registro-de-visitas-a5fd3.firebaseapp.com",
    databaseURL: "https://registro-de-visitas-a5fd3.firebaseio.com",
    projectId: "registro-de-visitas-a5fd3",
    storageBucket: "registro-de-visitas-a5fd3.appspot.com",
    messagingSenderId: "291692490928"
};
firebase.initializeApp(config);
const database = firebase.database();
const storageService = firebase.storage();

function agregarUsuarioDb(tipoVisita){ 
    let user = {
        nombre:null,
        apellido:null,
        empresa:null,
        tipo:tipoVisita,
        image:null,
        fechaRegistro: new Date().getTime()
    };
     user.nombre = document.getElementById("first_name").value;
     user.apellido = document.getElementById("last_name").value;
     user.empresa = document.getElementById("nombre_empresa").value;
     console.log(document.getElementById('photoFileSelector').files.length)
     if(document.getElementById('photoFileSelector').files.length  > 0)
        user.image = sendPhotoToStorage(document.getElementById('photoFileSelector').files);
    
    console.log(user);
    console.log(new Date(user.fechaRegistro)); 
    let userConect = null;
  userConect = database.ref('visitas');
  let conectados = userConect.push().set(user);

}