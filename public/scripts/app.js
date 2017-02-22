var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];
// sort by date created using sort function

function renderTweets(tweets) {
  for (let tweet of tweets) {
    $('.all-tweets').append(createTweetElement(tweet));
  }
}

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
  const $postage = $('<span>').text('CHANGE THIS');
  const $heart = $('<img>').attr('src', 'https://image.flaticon.com/icons/svg/60/60993.svg').addClass('invisible');
  const $retweet = $('<img>').attr('src', 'https://d30y9cdsu7xlg0.cloudfront.net/png/18408-200.png').addClass('invisible');
  const $flag = $('<img>').attr('src', 'http://simpleicon.com/wp-content/uploads/flag.png').addClass('invisible');
  $footer.append($postage, $heart, $retweet, $flag);
  // Append to article element
  $tweet.append($header, $content, $footer);
  return $tweet;
}

$(function() {
  renderTweets(data);
});
