$(function () {

  $('#creator').click(function () {
    $('#target').html('<button type="button" class="btn updater">New Button</button>');
  });

  // this does not affect the new elemente created
  $('button.updater').click(function () {
    $('#display').text($(this).text() + ' was clicked');
  });

  $('#container').delegate('button.updater', 'click', function () {
    $('#display').text($(this).text() + ' was clicked');
  });

}
);
