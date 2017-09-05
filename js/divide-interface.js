var Calculator = require('./../js/scripts.js').calculatorModule;
$(document).ready(function() {
  $('#divide').submit(function(event){
    event.preventDefault();
    var div1 = $('#div1').val();
    var div2 = $('#div2').val();
    var simpleCalculator = new Calculator("light blue");
    var total = simpleCalculator.divide(div1, div2);
    $('#divNum').append(total);
    $('#div').show();
  });
});
