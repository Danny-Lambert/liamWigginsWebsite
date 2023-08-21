
$('.menu-toggle').click(function(){
  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');
});

$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
     $('.theNavBar').addClass('scrolledNavBG');
  } else {
     $('.theNavBar').removeClass('scrolledNavBG');
  }
});