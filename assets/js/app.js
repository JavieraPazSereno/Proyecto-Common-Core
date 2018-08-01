// Initialize Firebase
var config = {
    apiKey: "AIzaSyCv_bBT5ZnpSWTi6SwvhCaeqszkxrBGhp8",
    authDomain: "registro-de-visitas-a5fd3.firebaseapp.com",
    databaseURL: "https://registro-de-visitas-a5fd3.firebaseio.com",
    projectId: "registro-de-visitas-a5fd3",
    storageBucket: "registro-de-visitas-a5fd3.appspot.com",
    messagingSenderId: "291692490928"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
const database = firebase.database();
const storageService = firebase.storage();


function agregarUsuarioDb(tipoVisita) {
    let user = {
        nombre: null,
        apellido: null,
        empresa: null,
        tipo: tipoVisita,
        image: null,
        fechaRegistro: new Date().getTime(),
        typeOfvisit: null
    };
    user.nombre = document.getElementById("first_name").value;
    user.apellido = document.getElementById("last_name").value;
    user.empresa = document.getElementById("nombre_empresa").value;
    user.typeOfvisit = document.getElementById("opciones").value;
    /* console.log(document.getElementById('photoFileSelector').files.length)
     if(document.getElementById('photoFileSelector').files.length  > 0)
        user.image = sendPhotoToStorage(document.getElementById('photoFileSelector').files);
    */
    sendMail(user);


}


function typeOfvisit() {
    return document.getElementById("opciones").value;


}

function sendMail(data) {

    // emailjs.init("user_MvVtMdap1RSoNvjWMeEvH");

    let service_id = 'gmail';
    let template_id = 'N0001';
    let template_params = {
        name: ' ',
        reply_email: 'john@doe.com',
        message: 'la empresa' + data.empresa + ' requiere realizar una visita a ' + data.typeOfvisit
    };

    console.log(service_id, template_id, template_params)

    emailjs.send(service_id, template_id, template_params)
        .then(function(response) {
            if (response.text === 'OK') {
                alert('El correo se ha enviado de forma exitosa');
                let userConect = database.ref('visitas');
                let conectados = userConect.push().set(data);

            }
            console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        }, function(err) {
            alert('Ocurrió un problema al enviar el correo');
            console.log("FAILED. error=", err);
        });


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