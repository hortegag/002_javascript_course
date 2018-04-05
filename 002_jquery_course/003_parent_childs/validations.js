$(function () {

  $('#target').attr('style', 'color:blue');

  // first locator will get the element with id target
  // second locator children will get all the direct children
  // third the attribute will update all the direct children
  $('#target').children().attr('style', 'color:red');

  // get all Descendadnt
  // find allways want a selector
  $('#secondParent').find('*').attr('style', 'color:yellow');

  $('#secondDemo').parent().attr('style', 'color:purple');

  $('#secondDemo').parents().attr('style', 'color:green');

}
);
