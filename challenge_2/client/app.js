

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
      success: function(response) {
        console.log('success!!!!', response);
        var tableHtml = csvToTableHtml(response);
        $('#inner-table').html(tableHtml);
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

 var csvToTableHtml = function(csvData) {
  var rows = csvData.split('\r\n');
  var html = '<table border = "1" id = "csv-table">';
  rows.forEach((data, index) => {
    html += '<tr>';
    var value = data.split(',');
    var len = value.length;
    for(var i = 0; i < len; i++) {
      html += "<td>" + value[i] + "</td>";
    }
    html += '</tr>';
  });
  html += '</table>';

  return html;
}






