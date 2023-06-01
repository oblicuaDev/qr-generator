const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')
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

button.addEventListener('click', (e) =>{
    e.preventDefault()
    const data ={
        username: username.value,
        password: password.value,
    }

    console.log(data)

} )
