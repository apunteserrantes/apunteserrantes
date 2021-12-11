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
/*--------------------------
Menu "Hamburger" Icon Animations
---------------------------*/
$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});
/*--------------------------
      Calling Carousel
---------------------------*/
var myCarousel = document.querySelector('#carouselExampleFade')
var carousel = new bootstrap.Carousel(carouselExampleFade);

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
