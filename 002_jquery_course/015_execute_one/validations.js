$(function () {

  //$('#target').click(function () {
  $('#target').one('click', function () {
    $('#display').text($('#display').text() + ' clicked!');

  });

}
);
