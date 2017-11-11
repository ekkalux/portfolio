
$( document ).ready(function() {

  $(".button").click(function() {
    $('html,body').animate({
        scrollTop: $(".about").offset().top},
        'slow');
});

$(".fa-angle-double-down").click(function() {
  $('html,body').animate({
      scrollTop: $(".projects").offset().top},
      'slow');
});

$(".button_contact").click(function() {
  $('html,body').animate({
      scrollTop: $(".contact").offset().top},
      'slow');
});

});
