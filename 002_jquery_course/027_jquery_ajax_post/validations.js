$(function () {

  $('#executor').click(function () {

    var post = {
      title: $('#title').val(),
      body: $('#body').val(),
      userId: $('#userId').val()
    };

    var $numberOfPost = $('#posts').val();
    $.post('https://jsonplaceholder.typicode.com/posts/', post).done(function (data) {
      $('#output').text(JSON.stringify(data));
    });

  });

  $(document).ajaxSend(function () {

    $('#executor').attr('disabled', 'disabled');

  }).ajaxComplete(function () {

    $('#executor').removeAttr('disabled');

  });

}
);
