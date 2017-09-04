//User Interface
$(document).ready(function(){
  onsubmit="setTimeout(function () { window.location.reload(); }, 10)"
  $("#gameForm").submit(function(event){
    $("#ulList").empty();
    var input = $("input#number").val();
    var output = pingProducer(input);
    $("#pingPong").text(output);
    $("#result").show();
    event.preventDefault();
  });
});
