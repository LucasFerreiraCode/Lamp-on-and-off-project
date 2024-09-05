function myfunon() {
    document.getElementById("bulb").src = "https://i.postimg.cc/h4pB57c8/Lampada-acesa.webp";
}

function myfunonoff() {
    document.getElementById("bulb").src = "https://i.postimg.cc/mkFyCHwx/Lampada-apagada.webp";
}

 const botao = document.getElementById('botao')

 botao.addEventListener('change', ()=>{
    document.body.classList.toggle('dark')
 })