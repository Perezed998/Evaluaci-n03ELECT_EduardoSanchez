const elem = document.getElementById("nombre")
const last_name = document.getElementById("apellido")
const date = document.getElementById("fecha_nacimiento")
const user = document.getElementById("usuario")
const pass = document.getElementById("password")
const email = document.getElementById("mail")
const telf = document.getElementById("numero_celular")
const parrafo = document.getElementById("advertencia")
const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", e=> {

    e.preventDefault()
    let advertencia=""
    let entrar = false
    let regexEmail= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    parrafo.innerHTML= ""

    if (elem.value.length <3){

        advertencia += 'El nombre no es valido <br>'
        entrar = true
    }

    if(!regexEmail.test(email.value)){

        advertencia += 'El email no es valido'
        entrar = true

    }


    if (pass.value.length <8){

        advertencia += 'La contrasena no es valido'
        entrar = true

    }


    if(entrar){

        parrafo.innerHTML=advertencia

     } else{

         parrafo.innerHTML = "Enviado"
        }  

    


})

    







