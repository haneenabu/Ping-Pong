//Business Logic
function pingProducer(userInput) {
  var newArr = [];
  for (var i = 1; i <= userInput; i++) {
    if (i % 15 === 0){
      newArr.push('ping-pong');
    }else if (i%5 === 0) {
      newArr.push('pong');
    }else if (i % 3 === 0) {
      newArr.push('ping');
    }else {
      newArr.push(i);
    }
  }
  arrToList(newArr);
}
//enter elements into an ol list
function arrToList(newArr) {
  for (var x = newArr.length - 1; x >=0 ; x--) {
    var list = document.getElementById('ulList');
    var li = document.createElement('li');
    li.innerHTML = newArr[x];
    list.insertBefore(li, list.firstChild)
  }
}
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
