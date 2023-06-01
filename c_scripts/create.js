const nombre = document.getElementById("name")
const email = document.getElementById("email")
const contraseña = document.getElementById("pass")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const iconeye = document.querySelector(".icon_eye")

window.addEventListener('load' ,() => {
    const contenedor_loader = document.querySelector('.contenedor_loader')
    contenedor_loader.style.opacity = 0
    contenedor_loader.style.visibility = 'hidden'
})  


iconeye.addEventListener('click', function(){
    const icon = this.querySelector("i");


    if(this.nextElementSibling.type === 'password'){
        this.nextElementSibling.type = 'text';
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }else{
        this.nextElementSibling.type = 'password';
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
})

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true 
    }
    if(contraseña.value.length <8){
        warnings += `La contraseña no es valida <br>`
        entrar = true

    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})
