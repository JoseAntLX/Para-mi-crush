
function moverPosicionRandom(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

const btnSi = document.getElementById("btn_si");
const btnNo = document.getElementById("btn_no");
const modoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target) })

btnSi.addEventListener('click', function(e) {
    alert('Sabía que dirías que sí. Casémonos y tengamos hijos. TE AMO!!! ♥');
    modoSexo.style.display = 'block';
    btnNo.style.display = 'none';
    const cancion = new Audio('img//img_modo_hot.mp3');
    cancion.play();
})