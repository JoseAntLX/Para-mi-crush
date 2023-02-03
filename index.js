
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
});

modoSexo.addEventListener('click', function(e) {
    const img = document.createElement('img');
    img.src = "https://i.pinimg.com/originals/c5/e3/c9/c5e3c9b5260daa31f5a4ab03ff048ece.png";
    modoSexo.appendChild(img);
})

const botones = document.getElementsByTagName('button');
console.log(botones);

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = "";
})


// Me quedé en 1:07:04