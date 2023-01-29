(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);
window.addEventListener("resize", function() {
            "use strict"; window.location.reload(); 
          });
         document.addEventListener("DOMContentLoaded", function()
         {
         /////// Prevent closing from click inside dropdown
         document.querySelectorAll('.dropdown-menu').forEach(function(element)
         {
                 element.addEventListener('click', function(e)
                 {
                         e.stopPropagation();
                 });
         })
         // make it as accordion for smaller screens
         if (window.innerWidth < 992)
         {
                 // close all inner dropdowns when parent is closed
                 document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown)
                 {
                         everydropdown.addEventListener('hidden.bs.dropdown', function()
                         {
                                 // after dropdown is hidden, then find all submenus
                                 this.querySelectorAll('.submenu')
                                         .forEach(function(everysubmenu)
                                         {
                                                 // hide every submenu as well
                                                 everysubmenu
                                                         .style
                                                         .display =
                                                         'none';
                                         });
                         })
                 });
                 document.querySelectorAll('.dropdown-menu a').forEach(function(element)
                 {
                         element.addEventListener('click', function(e)
                         {
                                 let nextEl = this.nextElementSibling;
                                 if (nextEl && nextEl.classList
                                         .contains('submenu'))
                                 {
                                         // prevent opening link if link needs to open dropdown
                                         e.preventDefault();
                                         console.log(nextEl);
                                         if (nextEl.style.display ==
                                                 'block')
                                         {
                                                 nextEl.style.display =
                                                         'none';
                                         }
                                         else
                                         {
                                                 nextEl.style.display =
                                                         'block';
                                         }
                                 }
                         });
                 })
         }
         // end if innerWidth
         });
		 
  function validateForm(){
      let name = document.forms['contactForm']['name'].value;
      let email = document.forms['contactForm']['email'].value;
      let phone = document.forms['contactForm']['phone'].value;
      let message = document.forms['contactForm']['message'].value;

      if (name == '' || hasNumber(name)){
          alert('Name must be filled out and must only contain letters');
          return false;
      } else if (email == '' && phone == ''){
          alert('Email or phone must be filled out');
          return false;
      } else if (!(email.includes('@'))){
          alert('Email does not seem to be valid');
          return false;
      }else if (isNaN(phone)){
          alert('Phone number seems to contain letters');
          return false;
      } else if (message == ''){
          alert('Message must be filled out');
          return false;
      } else {
          // confirm or cancel
          return confirm('Do you really want to sent the message?')
      }
  }

  function hasNumber(myString) {
      return /\d/.test(myString);
  }



