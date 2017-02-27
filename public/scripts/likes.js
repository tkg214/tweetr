$(function() {
  // Like feature increments user likes if they are logged in
  $('.all-tweets').on('click', '.like', function(event) {
    event.preventDefault();
    const $tweet = $(this).closest('.tweet');
    const tweetHandle = $tweet.find('.handle').text();
    const tweetContent  = $tweet.closest('.tweet').find('.content').text();
    const $likeError = $('<span>').addClass('like-error');
    const $likeErrorMessage = ($('<p>').text('You cannot like your own Tweets.'))
    $.ajax({
      url: '/user',
      method: 'GET'
    }).then(function(user) {
      const handle = user.handle;
      if (handle !== $tweet.find('.handle').text()) {
        return $.ajax({
          url: '/likes',
          method: 'PUT',
          data: {
            handle: tweetHandle,
            content: tweetContent
          }
        }).then(function(data) {
          $tweet.find('.likes p').text('Likes: ' + data);
        });
      } else {
        $('.like-error').remove();
        $likeError.append($likeErrorMessage);
        $tweet.after($likeError);
      }
    }).fail(function(err) {});
  });
});
