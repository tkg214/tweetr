$(function() {
  // Like feature increments user likes if they are logged in
  $('.all-tweets').on('click', '.like', function(event) {
    event.preventDefault();
    event.stopPropagation();
    const handle = $(this).closest('.tweet').find('.handle').text();
    const content  = $(this).closest('.tweet').find('.content').text();
    $.ajax({
      url: '/likes',
      method: 'PUT',
      data: {
        handle: handle,
        content: content
      }
    }).then(function(data) {
      console.log('success');
    }).fail(function(err) {
      alert('Failed to like!');
    });
  });
});
