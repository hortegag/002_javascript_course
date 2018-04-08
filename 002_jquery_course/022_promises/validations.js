$(function () {

  $('#executor').click(function () {
    //alert($dialog.text());
    //$('#container').append($dialog.clone());
    $('.box').hide(1000).promise().done(function () {
      //promises has methods done, fail and progress
      $('#output').text('Box is now hidden');
    });

    //  $('#output').text('Box is now hidden');
  });

}
);
