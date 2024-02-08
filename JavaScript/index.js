function showCards(){
    var div_HTML = document.getElementById("hidden_div");

    var new_button = '<a onclick="reproducirAudio()" id="lifes_dalesya">¿Quieres escuchar algo bonito? 🤭</a>' +
    '<a onclick="abrirVentana()" id="lifes_dalesya">Para la más hermosa e indocumentada mujer</a>' +
    '<a onclick="reproduce()" id="lifes_dalesya">Mis más hermosos deseos.</a>';
    //var new_divWithCard = '<div class="card"> <img src="img/img_projec_4.jpg" alt="La sonrisa mas hermosa que veras."> <div class="card-info"> <h2>La sonrisa mas hermosa</h2> <p>Tu corazón es tan grande como tu sonrisa, y en tu cumpleaños, quiero recordarte lo especial que eres para mí. Eres el amor de mi vida</p> </div> </div>';
    div_HTML.innerHTML = new_button;
    document.getElementById('lifes_dalesya').focus();
}

function reproducirAudio() {
    // Obtener el elemento de audio por su ID
    var audioElement = document.getElementById('miAudio');

    // Reproducir el audio
    audioElement.play();

    alert("Bueno, no solo el rash, también tienes una negra que te ama y quiere lo mejor para usted 😍");
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
    document.getElementById('modal').style.display = 'none';
}

function cerrarCarrousel2() {
    document.getElementById('modal2').style.display = 'none';
}
function abrirVentana() {
    document.getElementById('ventanaEmergente').style.display = 'block';
}

function enviarMensajeWhatsApp() {
    var audioElement = document.getElementById('audioNose');
    audioElement.play()
    alert("Bueno, espero la fotito 🤑")
    var telefono = '+50671878704';
    // Mensaje a enviar
    var mensaje = 'Bueno, me comprometo a enviar foto de mis ttas mas tarde. NOTA: Vuelve a la pagina que aun no termina mamahueva.';
    // URL de WhatsApp con el número y el mensaje
    var url = 'https://wa.me/' + telefono + '?text=' + encodeURIComponent(mensaje);
    
    // Abrir la ventana de WhatsApp
    window.open(url);
    abrirCarrousel();
    document.getElementById('ventanaEmergente').style.display = "none";
}

function respuestaNo() {
    // Obtener el elemento de audio por su ID
    var audioElement = document.getElementById('audioCas');
    // Reproducir el audio
    audioElement.play();
}

function moodSerious(){
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal2').style.display = 'block';
}

function reproduce(){
    document.getElementById("audios").play();
    document.getElementById("modal3").style.display = "block";
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

function cerrarCarrousel3(){
    document.getElementById("modal3").style.display = "none";
    document.getElementById("audios").pause();

}