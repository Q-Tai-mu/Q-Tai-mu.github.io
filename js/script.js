$(document).on("ready", function() {
  "use strict";

  /* Skip Loading */
  $(".page-loading > span").on("click", function() {
    $(this)
      .parent()
      .fadeOut();
  });

  // Initialize tooltip component
  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Initialize popover component
  $(function() {
    $('[data-toggle="popover"]').popover();
  });

  /*** FIXED Menu APPEARS ON SCROLL DOWN ***/	
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= 350) {
		$(".progress_cv_sec").addClass("sticky");
		}
		else{
		$(".progress_cv_sec").removeClass("sticky");
		$(".progress_cv_sec").addClass("");
		}
	});	

  /* Full Screen Menu */
  $('#open-full-screen').on('click', function(){
    $('header').toggleClass('active-full-menu');
    $('.full-screen-menu').fadeToggle();
    $(this).toggleClass('open');
    $('.full-screen-menu > ul > li.menu-item-has-children > ul').slideUp();
    $('.full-screen-menu > ul > li.menu-item-has-children').removeClass('active');
  });

  // Open Close Map //
  $('.google_map').hide();
  $('#OpenMap').on('click', function(){
    $('.google_map').fadeIn('fast');
    $('html').addClass('no-scroll');
  });
  $('.close_map span').on('click', function(){
    $('.google_map').fadeOut('fast');
    $('html').removeClass('no-scroll');
  });
  

});

$(window).on("load", function() {
  "use strict";

  $(".page-loading").fadeOut();
});
