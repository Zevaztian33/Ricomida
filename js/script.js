$(document).ready(function () {

    
    $('#enviarCorreo').click(function (){
        alert("El correo fue enviado correctamente...");
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
        })

    $('b').on("dblclick",function (){
        $(this).css('color', 'red');
    });

});