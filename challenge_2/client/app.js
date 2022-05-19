
// alert('Welcome to challenge 2!');

$(document).ready(function() {
  // form submittion functions:
  $('#form').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData($(this)[0]);
    console.log('this is formdata:', formData);

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
        $('#downloadLink').text('Download your csv report');
        $('#downloadLink').css({'background-color': 'yellow'});
        $('#downloadLink').attr({'href': 'csvReports'});
        $('#downloadLink').attr({'download': 'csvReport.csv'});
      },
      error: function(err) {
        console.log('Error submitting!!!', err);
        $('#csvResult').text('ERROR: Can not get csv result!');
        }
      })
    });





 });






