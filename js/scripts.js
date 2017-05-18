$(function() {
  smoothScrool(800);
  workBelt();
  workLoad();
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
    
    $('.work-belt').css('left', '-100%');
      console.log('dziala 1');
      $('.work-container').show();
    });

    $('.work-return').click(function () {
    
      $('.work-belt').css('left', '0%');
      console.log('dziala 2');
      $('.work-container').hide(800);
  });
}

function workLoad() {
  $.ajaxSetup ({ cache: false });

  $('.thumb-unit').click(function() {
    var $this = $(this);
    var newTitle = $this.find('strong').text();
    var newFolder = $this.data('folder');
    var spinner = '<div class="loader">Loading...</div>';
    var newHTML = newFolder;
    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
  });
}

