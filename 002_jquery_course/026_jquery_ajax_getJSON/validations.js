$(function () {

  $('#executor').click(function () {
    var $numberOfPost = $('#posts').val();
    $.getJSON('https://jsonplaceholder.typicode.com/posts/' + $numberOfPost, function (posts) {
      $('#id').text(posts.id);
      $('#title').text(posts.title);

    }
  );

  });

}
);
