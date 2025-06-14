$(document).ready(function() {
  // Smooth scrolling for navigation links
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 70
        }, 800);
        return false;
      }
    }
  });

  // Add active class to navigation based on scroll position
  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    
    // Assign active class to nav links while scrolling
    $('section').each(function(i) {
      if ($(this).position().top <= scrollDistance + 100) {
        $('.navbar-nav a.active').removeClass('active');
        $('.navbar-nav a').eq(i).addClass('active');
      }
    });
  }).scroll();

  // Mobile navigation toggle
  $('.navbar-toggle').click(function() {
    $('.navbar-collapse').toggleClass('in');
  });

  // Close mobile menu when clicking on a link
  $('.navbar-nav a').click(function() {
    $('.navbar-collapse').removeClass('in');
  });

  // Initialize tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Form validation
  $('#contact-form').submit(function(e) {
    e.preventDefault();
    
    // Simple form validation
    var name = $('#contact-name').val();
    var email = $('#contact-email').val();
    var message = $('#contact-message').val();
    var isValid = true;
    
    if (name === '') {
      $('#contact-name').addClass('has-error');
      isValid = false;
    } else {
      $('#contact-name').removeClass('has-error');
    }
    
    if (email === '' || !validateEmail(email)) {
      $('#contact-email').addClass('has-error');
      isValid = false;
    } else {
      $('#contact-email').removeClass('has-error');
    }
    
    if (message === '') {
      $('#contact-message').addClass('has-error');
      isValid = false;
    } else {
      $('#contact-message').removeClass('has-error');
    }
    
    if (isValid) {
      // In a real application, you would send the form data to a server here
      alert('Thank you for your message! This form is currently under construction.');
      $('#contact').modal('hide');
      $('#contact-form')[0].reset();
    }
  });
  
  // Email validation helper function
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  // Add animation to skills section
  $('.skill-category').each(function(i) {
    $(this).delay(i * 100).animate({
      opacity: 1,
      top: 0
    }, 500);
  });
  
  // Back to top button functionality
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  
  // Add fade-in animation for sections when scrolling
  $(window).scroll(function() {
    $('.fade-in-section').each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      
      if (scroll + windowHeight > position) {
        $(this).addClass('visible');
      }
    });
  }).scroll();
});