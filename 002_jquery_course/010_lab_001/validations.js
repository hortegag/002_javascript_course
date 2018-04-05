$(function () {

  // use of $ before variable due to linter validations
  $('#target').click(function () {
      $('#display').text('You have clicked the div element');
    });

  $('#display').text('<p><u>updated with text content</u> </p>');

  $('div').click(function () {
      // this will be the dom element that raised the event
      // convert to jquery object
      $(this).text('clicked');
      alert('a div was clicked');
    });

}
);
