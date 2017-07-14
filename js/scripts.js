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
  // for (var x= 0; 0< newArr.length; i++){
  //   document.write("<ul>" + "<li>" + newArr[x] + "</li>" + "</ul>")
  //   alert
  // }
  // arrToList(newArr);
  return newArr;
}

// function arrToList(newArr) {
//   var list;
//   var li;
//   for (var x = newArr.length - 1; x >=0 ; x--) {
//     list = document.getElementById('test');
//     li = document.createElement('li');
//     li.innerHTML = newArr[x];
//     list.insertBefore(li, list.firstChild)
//   }
// }
//User Interface
$(document).ready(function(){
  onsubmit="setTimeout(function () { window.location.reload(); }, 10)"
  $("#gameForm").submit(function(event){

    // document.getElementById("gameForm").onsubmit = function(){
    //   location.reload(true);
    // }
    var input = $("input#number").val();
    var output = pingProducer(input);
    $("#pingPong").text(output);
    $("#result").show();
    event.preventDefault();
  });
});
