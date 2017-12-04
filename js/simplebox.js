$( document ).ready(function() {

  $(".fa-angle-double-down").click(function() {
    $('html,body').animate({
        scrollTop: $(".navigation").offset().top},
        'slow');
});

$("#summary").click(function() {
  $('html,body').animate({
      scrollTop: $(".summary").offset().top},
      'slow');
});

$("#solution").click(function() {
  $('html,body').animate({
      scrollTop: $(".solution").offset().top},
      'slow');
});

$("#research").click(function() {
  $('html,body').animate({
      scrollTop: $(".research").offset().top},
      'slow');
});

$("#design").click(function() {
  $('html,body').animate({
      scrollTop: $(".branding").offset().top},
      'slow');
});

$("#usability").click(function() {
  $('html,body').animate({
      scrollTop: $(".user_testing").offset().top},
      'slow');
});

$("#results").click(function() {
  $('html,body').animate({
      scrollTop: $(".final").offset().top},
      'slow');
});

$("#visual").click(function() {
  $('html,body').animate({
      scrollTop: $(".visual").offset().top},
      'slow');
});

$(".fa-angle-double-up").click(function() {
  $('html,body').animate({
      scrollTop: $(".hero").offset().top},
      'slow');
});

$(function(){
        // Check the initial Poistion of the Sticky Header
        var stickyHeaderTop = $('.navigation').offset().top;

        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyHeaderTop ) {
                        $('.navigation').css({position: 'fixed', top: '0px'});
                        $('#stickyalias').css('display', 'block');
                } else {
                        $('.navigation').css({position: 'static', top: '0px'});
                        $('#stickyalias').css('display', 'none');
                }
        });
  });


});
