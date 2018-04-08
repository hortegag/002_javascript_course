$(function() {
  $('#serialize').click(function() {
    var person = new Object();
    person.firstName = $('#first-name').val();
    person.lastName = $('#last-name').val();

    // Serialize
    var jsonString = JSON.stringify(person);
    $('#raw-json').val(jsonString);
  });
  
  $('#deserialize').click(function() {
    var jsonString = $('#raw-json').val();
    var person = JSON.parse(jsonString);
    $('#person').html('<br />First name: ' + person.firstName
                      + '<br />Last name: ' + person.lastName
                     );
  });
});