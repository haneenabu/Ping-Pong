var Calculator = require('./../js/scripts.js').calculatorModule;
//User Interface
$(document).ready(function(){
  onsubmit="setTimeout(function () { window.location.reload(); }, 10)"
  $("#gameForm").submit(function(event){
    // $("#ulList").empty();
    var input = $("input#number").val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingProducer(input);
    output.forEach(function (element) {
      $('#pingPong').append("<li>" + element + "</li>");
    })
    // $("#pingPong").text(output);
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
