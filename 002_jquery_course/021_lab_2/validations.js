$(function () {

  var $dialog = $('#dialog').clone();
  $dialog.removeAttr('id');

  $('#executor').click(function () {
    //alert($dialog.text());
    //$('#container').append($dialog.clone());
    $('#target').append('<section>New element</section>');
  });

}
);
