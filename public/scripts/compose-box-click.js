$(function() {
  $('#nav-bar').on('click', '.compose-box', function(event) {
    event.preventDefault();
    event.stopPropagation();
    const $newTweet = $(this).closest('body').find('.new-tweet');
    $newTweet.slideToggle();
    $newTweet.find('textarea').focus();
  });
});
