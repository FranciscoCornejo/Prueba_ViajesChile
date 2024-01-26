$(function()
{
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) 
    {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    $("#enviarMensaje").on('click', function(){
        alert("su solicitud fue enviada exitosamente...");
    });
});