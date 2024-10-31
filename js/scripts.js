// Agregar evento de envío al formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Mostrar un mensaje de confirmación
    alert('Gracias por tu mensaje. ¡Te responderemos pronto!');

    // Reiniciar el formulario
    this.reset();
});

// Manejar el control deslizante de volumen
document.getElementById('volume-slider').addEventListener('input', function() {
    var audio = document.getElementById('background-audio');
    audio.volume = this.value; // Ajustar el volumen según el valor del control deslizante
});

// Agregar evento de clic para reproducir el audio
document.addEventListener('click', function() {
    var audio = document.getElementById('background-audio');
    audio.play();
});

// Script para manejar la imagen del modal
$(document).ready(function() {
    $('.btnGaleria').on('click', function() {
        const imageSrc = $(this).data('bs-image'); // Obtener la URL de la imagen del atributo data
        $('#modal-image').attr('src', imageSrc); // Establecer la URL de la imagen en el modal
    });
});