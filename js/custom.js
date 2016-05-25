$(document).ready(function () {

  // $('.trigger').click(function (event) {
  //   event.preventDefault();
  //   $('.hidden-block').toggle('Open');
  //       // $('.show-more').hide();
  //   });
  //
  // $('.trigger-blog').click(function (event) {
  //   event.preventDefault();
  //   $('.hidden-block-blog').toggle('Open');
  //   });
  //
  // $('.trigger-description').click(function (event) {
  //   event.preventDefault();
  //    $(this).prev().toggle('fast');
  //
  //   });

// $(this).find('.hidden-blog-description').toggle('Open');


  $('nav a[href^="#"]').on('click', function(event){
    event.preventDefault();
    var anchor = this.hash;
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 110
    }, 2500);
    });//scroll якорів

    // Header Scroll
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 250) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });

   // Mobile Navigation
   $('.toggle-menu').click(function () {
    $('nav').slideToggle('Open');
    $('.toggle-menu').toggleClass('Active');
    });
    // Desktop navigation
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth > 376) {
            $("nav").css({"display": "block"});
        }
        else {
            $("nav").css({"display": "none"});
        }
    });
    // Mobile Navigation click
   $('nav ul a').click(function () {
    if($(document).width() <376){
        $('nav').slideToggle('Open');
    }
    });

    $('#secondaryButton').click(function(){
        $('.fb-login-button').click();
        console.log('whatafuck')
    });
});

// $(document).ready(function($) {
//   $('a[href^="#"]').bind('click.smoothscroll', function(e) {
//     e.preventDefault();
//
//     // Get the current target hash
//     var target = this.hash;
//
//     // Animate the scroll bar action so its smooth instead of a hard jump
//     $('html, body').stop().animate({
//       'scrollTop' : $(target).offset().top
//     }, 900, 'swing', function() {
//       window.location.hash = target;
//     });
//   });
// });
