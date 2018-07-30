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
    /* console.log(document.getElementById('photoFileSelector').files.length)
     if(document.getElementById('photoFileSelector').files.length  > 0)
        user.image = sendPhotoToStorage(document.getElementById('photoFileSelector').files);
    */
    console.log(user);
    console.log(new Date(user.fechaRegistro)); 
    let userConect;
  userConect = database.ref('visitas');                                                                              
  let conectados = userConect.push().set(user);

}

/*async function sendPhotoToStorage(file){
    console.log('resolve', file[0]);

    const photoFile = file[0];
    const fileName =  (+new Date()) + '-' + photoFile.name;
    const metadata = {
        contentType : photoFile.type
    }

    const task = storageService.ref('imagenes')
                    .child(fileName)
                    .put(photoFile, metadata);

        task.then(snapshot => snapshot.ref.getDownloadURL())
            .then( (url) => {
                console.log('url', url);
                
            })
           .catch((error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;
      
      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  });
}


function sendPhotoToStorage(){
    const photoFile = files[0];
    const fileName = photoFile.name; // nombre del archivo, sirve para armar la ruta
    const metadata = { // datos sobre el archivo que estamos subiendo
        contentType : photoFile.type// tipo de archivo que estamos subiendo
    };
    console.log(file[0]);
    // va a retornar una tarea= task (objeto)
    const task = firebase.storage().ref('imagesPost') //Corresponden a las carpetas que tenemos dentro del storage
        .child(fileName)
        .put(photoFile, metadata);
 
    task.then(snapshot => snapshot.ref.getDownloadURL())  //obtenemos la url de descarga (de la imagen)
        .then(url => {
            console.log("URL del archivo > "+url);
            const currentUsers = firebase.auth().currentUser;
            cont.innerHTML += `
            <img style="width: 25%; display: flex" src="${currentUsers.photoURL}">
            <p> ${currentUsers.displayName}</p>
            <img style="width: 200px; display: flex" src="${url}">
            `; 
        });    
}
*/
