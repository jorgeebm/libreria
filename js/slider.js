$(document).ready(function(){
    // **********************************************
    //                SLIDER PUPLICIDAD
    // ***********************************************
    var elemSlider = $('.elemSlider li').length;        //Cantidad de li (elementos para el slider)
    var posImg = 1;

    for(i = 1; i<= elemSlider; i++){                    //Ciclo para crear circulos de paginacion
        $('.paginacion').append('<li><span>&#8226</span></li>')
    }

    $('.elemSlider li').hide();                         //Ocultar todos los elementos (imagenes) del slider
    $('.elemSlider li:first').show();                   //Mostrar solo 1
    $('.paginacion li:first').css({'color':'orange'});

    $('.paginacion li').click(paginacion)
    $('.der span').click(derecha)
    $('.izq span').click(izquierda)


    setInterval(function(){derecha();},5000);       //Cada 4s ejecuta la funcion derecha

    function paginacion(){
        var posicion = $(this).index() + 1;         //Obtener el valor del circulo seleccionado
        posImg = posicion;                          //Si selecciona un curculo se almacena el lugar del slider activo

        $('.elemSlider li').hide();
        $('.elemSlider li:nth-child('+ posicion +')').fadeIn();     //Muestra la slider que toque

        $('.paginacion li').css({'color':'black'});     //Cambia ek color de los circulos
        $(this).css({'color':'orange'});
    }

    function derecha(){
        if(posImg == elemSlider){
            posImg = 1;
        }else{
            posImg++;
        }

        $('.elemSlider li').hide();
        $('.elemSlider li:nth-child('+ posImg +')').fadeIn() ;

        $('.paginacion li').css({'color':'black'});     //Cambia ek color de los circulos
        $('.paginacion li:nth-child('+ posImg +')').css({'color':'orange'});
    }

    function izquierda(){
        if(posImg == 1){
            posImg = elemSlider;
        }else{
            posImg--;
        }

        $('.elemSlider li').hide();
        $('.elemSlider li:nth-child('+ posImg +')').fadeIn() ;

        $('.paginacion li').css({'color':'black'});     //Cambia ek color de los circulos
        $('.paginacion li:nth-child('+ posImg +')').css({'color':'orange'});
    }

    // **********************************************
    //                SLIDER PRODUCTOS
    // ***********************************************
    
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });

});



