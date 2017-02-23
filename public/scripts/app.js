// Function renders tweets and prepends each tweet element
function renderTweets(tweets) {
  for (let tweet of tweets) {
    $('.all-tweets').prepend(createTweetElement(tweet));
  }
}

// Function finds age of post to be used when creating tweet element
function getDaysOld(created) {
  const oneDay = 24*60*60*1000;
  const today = new Date();
  const createdAt = new Date(created);
  const diffDays = Math.round(Math.abs((today.getTime() - createdAt.getTime())/(oneDay)));
  return diffDays;
}

// Function creates jQuery object to be used for rendering
function createTweetElement(data) { // group things in order you use them
  // Create article element
  const $tweet = $('<article>').addClass('tweet');
  // Create header element
  const $header = $('<header>');
  const $username = $('<h2>').text(data.user.name);
  const $avatar = $('<img>').attr('src', data.user.avatars.small);
  const $handle = $('<span>').text(data.user.handle).addClass('handle');
  $header.append($avatar, $username, $handle);
  // Create content element
  const $content = $('<div>').addClass('content').append($('<p>')).text(data.content.text); // good idea to use .text instead of .html
  // Create footer element
  const $footer = $('<footer>');
  const $postage = $('<span>').text(getDaysOld(data.created_at) + ' days old');
  const $heart = $('<img>').attr('src', 'https://image.flaticon.com/icons/svg/60/60993.svg').addClass('invisible');
  const $retweet = $('<img>').attr('src', 'https://d30y9cdsu7xlg0.cloudfront.net/png/18408-200.png').addClass('invisible');
  const $flag = $('<img>').attr('src', 'http://simpleicon.com/wp-content/uploads/flag.png').addClass('invisible');
  $footer.append($postage, $heart, $retweet, $flag);
  // Append to article element
  $tweet.append($header, $content, $footer);
  return $tweet;
}

// Function that fetches tweets using Ajax get request and then renders tweets
function fetchTweets() {
  $.ajax({
    url: '/tweets',
    method: 'GET',
  }).then(function(tweets) {
    $('#tweet-submit').after(renderTweets(tweets));
  }).fail(function(err) {
    alert('Server Error')
  });
}

$(function() {
  fetchTweets();
  $('#tweet-submit').on('click', function (event) {
    event.preventDefault();
    const postLength = $(this).closest('form').find('textarea').val().length;
    const data = $(this).closest('form').serialize();
    // Post validated tweet, then get the tweet from server and prepend to feed
    if (postLength > 0 && postLength <= 140) {
      $(this).closest('form').find('textarea').val('');
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: data
      }).then(function(data) {
        return $.ajax({
          url: '/tweets',
          method: 'GET'
        });
      }).then(function(tweets) {
        $('.all-tweets').prepend(createTweetElement(tweets[tweets.length-1]));
      }).fail(function(err) {
        alert('Your post was not successful!');
      });
    } else if (postLength === 0) {
      alert('Your post needs to be over 0 characters.');
    } else if (postLength > 140) {
      alert('Your post needs to be 140 characters or less.');
    }
  });
});
