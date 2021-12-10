/*--------------------------
      Calling Carousel
---------------------------*/
var myCarousel = document.querySelector('#carouselExampleFade')
var carousel = new bootstrap.Carousel(carouselExampleFade);


$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.navbar').css('background', 'rgba(0,0,0,0.5)');
    } else{
        $('.navbar').css('background', '#000000');
    }
});

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.nav-link').css('color', '#d4d7e2');
    } else{
        $('.nav-link').css('color', '#d4dae2');
    }
});
