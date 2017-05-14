$(function() {
  smoothScrool(800);
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
