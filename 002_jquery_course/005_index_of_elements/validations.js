$(function () {

  // use of $ before variable due to linter validations
  var $element = $('#target');

  var $container = $('#parent');

  var $index = $container.children().index($element);

  $('#display').text('Index is:' + $index);

  // this does not work
  //$container.children().get($index).attr('style', 'color: purple');

  // get return an element not a jquery object
  var $elementByGet = $container.children().get($index);

  $($elementByGet).attr('style', 'color: purple');
  $container.children().get($index).append(' Element obtained by index');

}
);
