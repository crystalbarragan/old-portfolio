$(document).ready(function(){ 

	
// Fade In
	
	$(function() {
    $('body').removeClass('fade-out');
});
	
	
// Scroll Down
    $('.learn-more').click(function() {
    $('html,body').animate({
        scrollTop: $('.resume').offset().top},
        'slow');
});
    
// Smooth Scrolling
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

// Initiate Shuffle Plugin

		var $portfolioContainer = $('.portfolio-items-container');

		$('#filter li').on('click', function (e) {
			e.preventDefault();

			$('#filter li').removeClass('active');
			$(this).addClass('active');

			group = $(this).attr('data-group');
			var groupName = $(this).attr('data-group');

			$portfolioContainer.shuffle('shuffle', groupName);
		});
	

// Initiate WOW Plugin
    wow = new WOW ({
        mobile: false
    });
    
    wow.init();
    
})(jQuery);