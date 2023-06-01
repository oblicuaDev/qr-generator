const titulo = document.querySelector(".titulo"),
qrInput = document.querySelector(".form input"),
generateBtn = document.querySelector(".form button"),
qrImg = document.querySelector(".qr-code img"),
descargar = document.querySelector(".descarga"),
img = document.querySelector("a"),
reiniciar = document.getElementById("reiniciar");
let preValue;


reiniciar.addEventListener("click" ,() =>{
    qrInput.value =""
   
})

function ocultar(){
    document.querySelector('.qr-code').style.display = 'none';
    document.querySelector('.titulo').style.height = '300px';

}
function mostrar(){
    if(qrInput.value !== ""){
    document.querySelector('.qr-code').style.display = 'block';
    document.querySelector('.titulo').style.height = '600px';

    }
}




generateBtn.addEventListener("click", () => {
    // e.preventDefault()
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generando código QR...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        titulo.classList.add("active");
        generateBtn.innerText = "Generar código QR";
    });

});

descargar.addEventListener('click' ,() =>{
    var a = document.createElement('a');
    a.download = true;
    a.target = '_blank';
    a.href= qrImg.src;
    a.click();
})






function getFileName(str){
    return str.substr(str.lastIndexOf('/') + 1)
}