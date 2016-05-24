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
    // $(window).on('scroll', function() {
    //     var scroll = $(window).scrollTop();
    //
    //     if (scroll >= 250) {
    //         $('header').addClass('fixed');
    //     } else {
    //         $('header').removeClass('fixed');
    //     }
    // });

   // Mobile Navigation
   $('.toggle-menu').click(function () {
    $('nav').slideToggle('Open');
    });
   $('nav ul a').click(function () {
    if($(document).width() <676){
        $('nav').slideToggle('Open');
    }
    })



});
//
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
