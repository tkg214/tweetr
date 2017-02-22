function renderTweets(tweets) {
  for (let tweet of tweets) {
    $('.all-tweets').prepend(createTweetElement(tweet));
  }
}

// Function finds age of post
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

// Sends Ajax post request to server for user tweet post
$(function() {
  $('#tweet-submit').on('click', function (event) {
    event.preventDefault();
    const data = $(this).closest('form').serialize();
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: data
    }).then(function(data) {
      console.log('WORKS!!!');
    }).fail(function(err) {
      alert('Your post was not successful!');
    });
  });
});

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

// Sends Ajax get request to server to fetch tweets
$(function() {
  fetchTweets();
});
