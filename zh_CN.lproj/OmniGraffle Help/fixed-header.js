$(window).scroll(function(){
    if ($(window).scrollTop() >= 0) {
       $('ul').addClass('menu');
    }
    else {
       $('ul').removeClass('menu');
    }
});