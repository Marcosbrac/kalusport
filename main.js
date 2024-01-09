$(document).ready(function(){
    var altura = $('.menu').offset().top;
    
    $(window).on('scroll',function(){
        if ( $(window).scrollTop() > altura ){
            $('.menu').addClass('menu-fixed');
        } else {
            $('.menu').removeClass('menu-fixed');
        }
    });
});
$(document).ready(function(){
    var altura = $('.menu2').offset().top;
    
    $(window).on('scroll',function(){
        if ( $(window).scrollTop() > altura ){
            $('.menu2').addClass('menu-fixed2');
        } else {
            $('.menu2').removeClass('menu-fixed2');
        }
    });
});