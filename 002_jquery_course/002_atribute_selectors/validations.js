$(function () {

  alert('ready player one');

  $('[custom="custom"]').text('Hello custom attribute');

  // start with
  $('[class^="col"]').text('This elemente begin with col');

  // contains
  $('[class*="md"]').append(' It has md');

  $('header > h1').append(' Child of header');

  $('header  h1').append(' Descendadnt');
}
);
