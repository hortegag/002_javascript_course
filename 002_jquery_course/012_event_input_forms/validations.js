$(function () {

  $('input[type="text"]').focus(function () {

    $(this).next('span.help').removeAttr('hidden');

  }).blur(function () {
    // find every span help element and hide them
    $('span.help').attr('hidden', 'hidden');
  });

}
);
