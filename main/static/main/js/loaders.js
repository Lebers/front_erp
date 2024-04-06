// Llama a showPage cuando la página esté completamente cargada
window.addEventListener('load', function () {
    showPage();
});

function showPage() {
    document.getElementById("loader-wrapper").style.display = "none";
}

$(document).ready(function() {
    // Mostrar el loader al iniciar una llamada AJAX
    $(document).ajaxStart(function() {
        $("#loader-wrapper").show();
    });

    // Ocultar el loader al completar todas las llamadas AJAX
    $(document).ajaxStop(function() {
        $("#loader-wrapper").hide();
    });

});