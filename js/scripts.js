$(function() {
  smoothScrool(800);
  workBelt();
});






function smoothScrool (duration) {
  $('a[href^="#"]').on('click', function(event) {
    console.log("działa")
    var target = $( $(this).attr('href') );

    if ( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
}



function workBelt () {
  $('.thumb-unit').click(function () {
    
    $('.workBelt').css('left', '-100%');
      console.log('dziala 1');
    });

    $('.work-return').click(function () {
    
      $('.workBelt').css('left', '0%');
      console.log('dziala 2');
  });
}