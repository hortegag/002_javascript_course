$(function () {

  $('#executor').click(function () {
    $.get('https://jsonplaceholder.typicode.com/posts/1', function (data) {
      $('#output').text(JSON.stringify(data));
    }
  );

  });

}
);
