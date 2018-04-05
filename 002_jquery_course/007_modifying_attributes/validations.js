$(function () {

  // use of $ before variable due to linter validations

  $('#target').attr('style', 'color:red');

  var $color = $('#target').attr('style');

  alert($color);

  $('#target').removeAttr('style');
}
);
