$( document ).ready(function() {


$(".fa-arrow-down").click(function() {
  $('html,body').animate({
      scrollTop: $(".summary").offset().top},
      'slow');
});

$("#summary").click(function() {
  $('html,body').animate({
      scrollTop: $(".summary").offset().top},
      'slow');
});

$("#research").click(function() {
  $('html,body').animate({
      scrollTop: $(".research").offset().top},
      'slow');
});

$("#architecture").click(function() {
  $('html,body').animate({
      scrollTop: $(".information").offset().top},
      'slow');
});

$("#branding").click(function() {
  $('html,body').animate({
      scrollTop: $(".brand").offset().top},
      'slow');
});

$("#usability").click(function() {
  $('html,body').animate({
      scrollTop: $(".usability").offset().top},
      'slow');
});

$("#reflection").click(function() {
  $('html,body').animate({
      scrollTop: $(".reflection").offset().top},
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
