$(function () {

  $('#target').prev().attr('style', 'color:blue');

  // update all previus elements
  $('#target').prevAll().attr('style', 'color:green');

  $('#target').prevUntil('h1').attr('style', 'color:purple');

  $('#target').next().attr('style', 'color:yellow');

  $('#target').nextAll().attr('style', 'color:green');

  $('#target').nextUntil('h1').attr('style', 'color:red');

}
);
