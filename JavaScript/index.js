function showCards(){
    var div_HTML = document.getElementById("hidden_div");

    var new_button = '<a href="tus.html" class="lifes_dalesya">La gran vida de Dalesya</a>' +
    '<a href="tus.html" class="lifes_dalesya">Mis hermosas palabras para tí.</a>' +
    '<a href="tus.html" class="lifes_dalesya">Mis más hermosos deseos.</a>';
    //var new_divWithCard = '<div class="card"> <img src="img/img_projec_4.jpg" alt="La sonrisa mas hermosa que veras."> <div class="card-info"> <h2>La sonrisa mas hermosa</h2> <p>Tu corazón es tan grande como tu sonrisa, y en tu cumpleaños, quiero recordarte lo especial que eres para mí. Eres el amor de mi vida</p> </div> </div>';
    div_HTML.innerHTML = new_button;
}