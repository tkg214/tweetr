$(document).ready(function() {
  $('.new-tweet').on('keyup', 'textarea', function() {
    const counter = $(this).closest('form').find('.counter');
    const maxChar = 140;
    let tweetLength = +$(this).val().length;
    counter.text(maxChar - tweetLength)
    if ((maxChar - tweetLength) < 0) {
      counter.addClass('red');
    } else {
      counter.removeClass('red');
    }
  });
});
