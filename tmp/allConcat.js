var Calculator = require('./../js/scripts.js').calculatorModule;
$(document).ready(function() {
  $('#multiply').submit(function(event){
    event.preventDefault();
    var mult1 = $('#mult1').val();
    var mult2 = $('#mult2').val();
    var simpleCalculator = new Calculator("electric blue");
    var total = simpleCalculator.multiply(mult1, mult2);
    $('#mult').append('test' + total);
    // $('#mult').show();
  });
});

var Calculator = require('./../js/scripts.js').calculatorModule;
//User Interface
$(document).ready(function(){
  onsubmit="setTimeout(function () { window.location.reload(); }, 10)";
  $("#gameForm").submit(function(event){
    
    var input = $("input#number").val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingProducer(input);
    output.forEach(function (element) {
      $('#pingPong').append("<li>" + element + "</li>");
    });

    $("#result").show();
    event.preventDefault();
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#pingPong').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});