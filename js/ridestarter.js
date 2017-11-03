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
      scrollTop: $(".design_choices").offset().top},
      'slow');
});

$("#implementation").click(function() {
  $('html,body').animate({
      scrollTop: $(".implementation").offset().top},
      'slow');
});

$("#conclusion").click(function() {
  $('html,body').animate({
      scrollTop: $(".conclusion").offset().top},
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
