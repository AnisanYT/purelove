function showCards(){
    var div_HTML = document.getElementById("hidden_div");

    var new_button = '<a onclick="reproducirAudio()" id="lifes_dalesya">¿Quieres escuchar algo bonito? 🤭</a>' +
    '<a onclick="abrirCarrousel()" id="lifes_dalesya">Para la más hermosa e indocumentada mujer</a>' +
    '<a href="tus.html" id="lifes_dalesya">Mis más hermosos deseos.</a>';
    //var new_divWithCard = '<div class="card"> <img src="img/img_projec_4.jpg" alt="La sonrisa mas hermosa que veras."> <div class="card-info"> <h2>La sonrisa mas hermosa</h2> <p>Tu corazón es tan grande como tu sonrisa, y en tu cumpleaños, quiero recordarte lo especial que eres para mí. Eres el amor de mi vida</p> </div> </div>';
    div_HTML.innerHTML = new_button;
    document.getElementById('lifes_dalesya').focus();
}

function reproducirAudio() {
    // Obtener el elemento de audio por su ID
    var audioElement = document.getElementById('miAudio');

    // Reproducir el audio
    audioElement.play();
}

function abrirCarrousel() {
    // Muestra la capa modal al abrir el carrousel
    document.getElementById('modal').style.display = 'block';

    // Inicializa Swiper
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
function cerrarCarrousel() {
    // Oculta la capa modal al cerrar el carrousel
    document.getElementById('modal').style.display = 'none';
}