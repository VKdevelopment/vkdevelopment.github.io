$(document).ready(function() {
  var wHeight = $(window).height();
  
  function parallax() {
    var pHeight = $(this).outerHeight();
    var pMiddle = pHeight / 2;
    var wMiddle = wHeight / 2;
    var fromTop = $(this).offset().top;
    var scrolled = $(window).scrollTop();
    var speed = $(this).attr('data-parallax-speed');
    var rangeA = (fromTop - wHeight);
    var rangeB = (fromTop + pHeight);
    var rangeC = (fromTop - wHeight);
    var rangeD = (pMiddle + fromTop) - (wMiddle + (wMiddle / 2));
    
    if (rangeA < 0) {
      rangeA = 0;
      rangeB = wHeight
    }

    var percent = (scrolled - rangeA) / (rangeB - rangeA);
    percent = percent * 100;
    percent = percent * speed;
    percent = percent.toFixed(2);
    
    var animFromBottom = (scrolled - rangeC) / (rangeD - rangeC);
    animFromBottom = animFromBottom.toFixed(2);
    
    if (animFromBottom >= 1) {
      animFromBottom = 1;
    }

    $(this).css('background-position', 'center ' + percent + '%');
    $(this).find('.parallax-content').css('opacity', animFromBottom);
    $(this).find('.parallax-content').css('transform', 'scale(' + animFromBottom + ')');
	
  }
  $('.parallax').each(parallax);
  $(window).scroll(function(e) {
    $('.parallax').each(parallax);
  });
});


//Scroll button to Top

$(document).ready(function() {

            //Check to see if the window is top if not then display button
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $('.scrollToTop').fadeIn();
                } else {
                    $('.scrollToTop').fadeOut();
                }
            });

            //Click event to scroll to top
            $('.scrollToTop').click(function() {
                $('html, body').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });

        });

//Animated Social Icons

$(document).ready(function() {

            animationHover(".icon", 'tada');

            function animationHover(element, animation) {
                element = $(element);
                element.hover(
                    function() {
                        $(this).addClass('animated ' + animation);
                    },
                    function() {
                        //wait for animation to finish before removing classes
                        window.setTimeout(function() {
                            element.removeClass('animated ' + animation);
                        }, 2000);
                    });
            }
        });

//Smooth scrolling
var jump = function(e) {
            //prevent the "normal" behaviour which would be a "hard" jump
            e.preventDefault();
            //Get the target
            var target = $(this).attr("href");
            //perform animated scrolling
            $('html,body').animate({
                //get top-position of target-element and set it as scroll target
                scrollTop: $(target).offset().top
                    //scrolldelay: 2 seconds
            }, 2000, function() {
                //attach the hash (#jumptarget) to the pageurl
                location.hash = target;
            });

        }

        $(document).ready(function() {
            $('a[href*=#]').bind("click", jump);
            return false;
        });
        
//Development Timeline
 $(document).ready(function(){

  //DEBOUNCE
  
  debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
		};
  }; 
    
  //SCROLL ANIMATED
  
  $(function(){
    var $target = $('[data-anime="scroll"],[data-anime-top="scroll-top"],[data-anime-left="scroll-left"],[data-anime-right="scroll-right"],[data-anime-bottom="scroll-bottom"]'),
      animationClass = 'animate',
      offset = $(window).height() * 3/4;
  
    function animeScroll(){
      var documentTop = $(document).scrollTop();
      $target.each(function(){
        var itemTop = $(this).offset().top;
        
        if (documentTop > itemTop - offset){
          $(this).addClass(animationClass);
        } else {
          $(this).removeClass(animationClass);
        }
      });
    }

    animeScroll();

    $(document).scroll(debounce(function(){
      animeScroll();
    }, 10));
    
  });
          

// Clients Feedback
// https://github.com/OwlCarousel2/OwlCarousel2

$(function() {
  $('.owl-carousel.testimonial-carousel').owlCarousel({
    nav: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    dots: false,
    responsive: {
      0: {
        items: 1,
      }
    }
  });
});
 

});
        