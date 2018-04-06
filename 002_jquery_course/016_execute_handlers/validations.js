$(function () {

  //$('#target').click(function () {
  $('button.updater').click(function () {
    var currentText = $('#display').text();
    var buttonText = $(this).text();
    $('#display').text(currentText + ' - ' + buttonText);

  });

  $('#target').click(function () {

    //$('button.updater').click();

    //just execute the eventHandler
    //$('button.updater').trigger('click');

    // just execute the first e selectorlement that match the
    $('button.updater').triggerHandler('click');

  });

}
);
