$(function() {

  $('#nav-bar').on('click', '.compose-box', function(event) {
    event.preventDefault();
    event.stopPropagation();
    const $newTweet = $(this).closest('body').find('.new-tweet');
    $newTweet.slideToggle();
    $newTweet.find('textarea').focus();
  });

  $('#nav-bar').on('click', '.login-box', function(event) {
    event.preventDefault();
    event.stopPropagation();
    const $login = $(this).closest('body').find('.login');
    $login.slideToggle();
    $('.registration').slideUp();
  });

  $('#nav-bar').on('click', '.register-box', function(event) {
    event.preventDefault();
    event.stopPropagation();
    const $register = $(this).closest('body').find('.registration');
    $register.slideToggle();
    $('.login').slideUp();
  });
});
