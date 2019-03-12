$(document).ready(function(){
    
	$(".dropbtn").click(function(){
        $(".dropdown-content").slideToggle('fast');
    });
	
});



/* $(document).ready(function() {
"use strict";
var carousel2 = $("#main-banner");
carousel2.owlCarousel({
   navigation : true, 
  slideSpeed : 300,
  paginationSpeed : 400,
  pagination : true,
  loop:true,
  singleItem:true
});
});
 */
 
 
 
/*-----------------------*/
$(document).ready(function() {
   //"use strict";
   var carousel2 = $("#main-banner");
    carousel2.owlCarousel({
        items : 1,
		autoplay: true,
        lazyLoad : true,
        navigation : true,
        pagination: true,
        paginationNumbers: false,
		loop:true,
        margin:5, 
        autoplay: true,
		responsiveClass:true,
    });
});
/*-----------------------*/
$(document).ready(function() {
   //"use strict";
   var carousel = $("#screenshot-carousel");
    carousel.owlCarousel({
        items : 5,
		autoplay: true,
        lazyLoad : true,
        navigation : true,
        pagination: true,
        paginationNumbers: false,
		loop:true,
        margin:5, 
        autoplay: true,
		responsiveClass:true,
		responsive:{
 0:{
  items:1	,
  nav:true
 },
 480:{
  items:2,
  nav:true
 },
 768:{
  items:5,
  nav:true
 },
  800:{
  items:5,
  nav:true
 },
  980:{
  items:5,
  nav:true
 },
 1024:{
  items:5,
  nav:true
 }
  }
    });
});

/*-----------------------*/
	
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 0
        }, 1000);
        return false;
      }
    }
  });
});

