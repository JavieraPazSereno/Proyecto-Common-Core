(function(){
  emailjs.init("user_MvVtMdap1RSoNvjWMeEvH");
})();
const vue = new Vue({
  el: '#app',
  data(){
      return {
          from_name: '',
          from_email: '',
          message: '',
          subject: '',
      }
  },
  methods: {
      enviar(){
          let data = {
              from_name: this.from_name,
              from_email: this.from_email,
              message: this.message,
              subject: this.subject,

          };
          
          emailjs.send("gmail","N0001", data)
          .then(function(response) {
              if(response.text === 'OK'){
                  alert('El correo se ha enviado de forma exitosa');
              }
             console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
          }, function(err) {
              alert('Ocurrió un problema al enviar el correo');
             console.log("FAILED. error=", err);
          });
      }
  }
});