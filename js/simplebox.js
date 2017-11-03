$( document ).ready(function() {

  $(".fa-arrow-circle-o-down").click(function() {
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
      scrollTop: $(".user_flow").offset().top},
      'slow');
});

$("#usability").click(function() {
  $('html,body').animate({
      scrollTop: $(".low_fidelity").offset().top},
      'slow');
});

$("#high_fidelity").click(function() {
  $('html,body').animate({
      scrollTop: $(".high_fidelity").offset().top},
      'slow');
});

$("#results").click(function() {
  $('html,body').animate({
      scrollTop: $(".final_product").offset().top},
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
