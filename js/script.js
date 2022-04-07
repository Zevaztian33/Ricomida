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
    $("#panqueques").click(function(){
        $('#receta-texto').toggle(1000,function() {
        });
    });
    $("#tiramisu").click(function(){
        $('#receta-texto2').toggle(1000,function() {
        });
    });
    $("#plateada").click(function(){
        $('#receta-texto3').toggle(1000,function() {
        });
    });
});