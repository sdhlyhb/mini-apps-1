
// alert('Welcome to challenge 2!');

$(document).ready(function() {
  $('#form').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData($(this)[0]);
    console.log('this is formdata:', formData);


  // var formData = {};
  // var input = $('#form').serializeArray();
  // // console.log('this is input', input);
  // formData[input[0].name] = input[0].value;
  // // console.log('this is formdata:', formData);

    $.ajax({

      url:'upload_json',
      data: formData,
      type: 'POST',
      enctype: 'multipart/form-data',
      processData: false,
      contentType: false,
      success: function(respose) {
        console.log('success!!!!', respose);
        $('#csvResult').text(respose);
      },
      error: function(err) {
        console.log('Error submitting!!!', err);
        $('#csvResult').text('ERROR: Can not get csv result!');
      }

    })


    });


 });






