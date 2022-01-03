/*--------------------------
  Shifting Navbar color when scrolling
---------------------------*/
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.navbar').css('background', 'rgba(0,0,0,0.5)');
    } else{
        $('.navbar').css('background', '#000000');
    }
});
/*--------------------------
  Closing Collapsible Menu when clicking outside
---------------------------*/
$(document).ready(function() {
   $(document).click(function() {
      // if($(".navbar-collapse").hasClass("in")){
      $('.navbar-collapse').collapse('hide');
      // }
   });
});


/*------------------
   Animations
--------------------*/
function fadeup() {
  var fadeups = document.querySelectorAll(".fadeup");

  for (var i = 0; i < fadeups.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = fadeups[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      fadeups[i].classList.add("active");
    } else {
      fadeups[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", fadeup);

/*-------*/
function zoomin() {
  var zoomins = document.querySelectorAll(".zoomin");

  for (var i = 0; i < zoomins.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = zoomins[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      zoomins[i].classList.add("active");
    } else {
      zoomins[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", zoomin);
/*-------*/
function rotate() {
  var rotates = document.querySelectorAll(".rotate");

  for (var i = 0; i < rotates.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = rotates[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      rotates[i].classList.add("active");
    } else {
      rotates[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", rotate);

/*--------------------------
      Calling Carousel
---------------------------*/
var myCarousel = document.querySelector('#carouselExampleFade')
var carousel = new bootstrap.Carousel(carouselExampleFade);

/*------------------
  Gets current year in footer:
--------------------*/
document.getElementById("year").innerHTML = new Date().getFullYear();
