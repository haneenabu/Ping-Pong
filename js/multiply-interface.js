var Calculator = require('./../js/scripts.js').calculatorModule;
$(document).ready(function() {
  $('#multiply').submit(function(event){
    event.preventDefault();
    var mult1 = $('#mult1').val();
    var mult2 = $('#mult2').val();
    var simpleCalculator = new Calculator("electric blue");
    var total = simpleCalculator.multiply(mult1, mult2);
    $('#mult').append(total);
    // $('#mult').show();
  });
});
