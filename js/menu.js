var elementTop = $('.menu').offset().top;

$(window).scroll(function(){
    if( $(window).scrollTop() >= elementTop){
        $('.header').addClass('nav_fixed');
        $('.elementos').addClass('ver_logo');
        $('.elementos').addClass('centrar_txt');
        $('.elementos').addClass('centrar_busqueda');
    }else{
        $('.header').removeClass('nav_fixed');
        $('.elementos').removeClass('ver_logo');
        $('.elementos').removeClass('centrar_txt');
        $('.elementos').removeClass('centrar_busqueda');
    }
});

$('.btnMenu').on('click', function(){
    $('.elementos').toggleClass('menuAparecer');
});
