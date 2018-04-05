$(function () {

  // use of $ before variable due to linter validations
  $('#target').click(function (event) {
    output = 'user click on: ' + event.pageX + '/' + event.pageY;
    $('#display').text(output);

  });
}
);
