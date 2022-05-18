
//alert('Welcome to challenge 2!');

$(document).ready(function(){

  $('input-form').on('submit', function(e){
    e.preventDefault();
    // ... more event handler code here
    $.ajax({

      url:'/',
      data: {"data": "this is a test data"},
      type: 'POST',
      dataType: 'json',
      success: function (e) {
        console.log(JSON.stringify(e));
      },


      error: function(e) {
        console.log('ERROR SUBMITTING,', JSON.stringify(e));
      }


    });


  });







});