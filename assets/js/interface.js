( function($) {
  'use strict';
$(function(e) {


/*------------------------------------------------------------------
	Intro-Slider
	-------------------------------------------------------------------*/
	$('#intro .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	dots:false,
	animateOut: 'fadeOut',
	autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    }
	});


/*-------------------------------------------------------------------------------
	  Video
	-------------------------------------------------------------------------------*/
$('.popup-youtube').magnificPopup({
		type: 'iframe'
	});
	$('.popup-vimeo').magnificPopup({
		type: 'iframe'
	});
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});


/*------------------------------------------------------------------
	Services
	-------------------------------------------------------------------*/
	$('#services .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
	dots:false,
	animateOut: 'fadeOut',
	autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{items:1},
        600:{items:2},
        1000:{items:4}
    }
	});


/*------------------------------------------------------------------
	Portfolio
	-------------------------------------------------------------------*/
	$('#portfolio-image .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
	dots:false,
	animateOut: 'fadeOut',
	autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    }
	});


/*------------------------------------------------------------------
	Partners-Logo
	-------------------------------------------------------------------*/
	$('#partners .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
	dots:false,
	animateOut: 'fadeOut',
	autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{items:2},
        600:{items:3},
        1000:{items:5}
    }
	});

/*------------------------------------------------------------------
	testimonials
	-------------------------------------------------------------------*/
	$('#testimonials .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
	dots:true,
	autoplay:true,
    autoplayTimeout: 3000,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    }
	});
	
	
/*------------------------------------------------------------------
	testimonials-2
	-------------------------------------------------------------------*/
	$('#testimonialsTwo .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
	dots:true,
	autoplay:true,
    autoplayTimeout: 3000,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:3}
    }
	});
	

/*------------------------------------------------------------------
	Team
	-------------------------------------------------------------------*/
	$('#team .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
	dots:true,
	autoplay:true,
    autoplayTimeout: 3000,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:3}
    }
	});
	


/*-------------------------------------------------------------------------------
	search-form
-------------------------------------------------------------------------------*/
$('#search-toggle').on('click', function(e) {
	    $("#search_form").toggleClass("main");
});


/*-------------------------------------------------------------------------------
	Portfolio
-------------------------------------------------------------------------------*/

$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});

	
 /*------------------------------------------------------------------
	Countdown
	-------------------------------------------------------------------*/
  // 2018[year] - 12[month] - 01[day]
  
  $('#countdown').countdown('2019/12/01', function(event) { 
	$(this).html(event.strftime('<span class="countdown-period">%-D <span>Day%!D</span></span> <span class="countdown-period">%H <span>Hours</span></span> <span class="countdown-period">%M <span>Minutes</span></span> <span class="countdown-period">%S <span>Seconds</span></span>'));
  });
  
  

});	

})(jQuery);