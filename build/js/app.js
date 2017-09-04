(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName){
  this.skin = skinName;
}
//Business Logic
Calculator.prototype.pingProducer= function(userInput) {
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
  return newArr;
}
exports.calculatorModule = Calculator;
//enter elements into an ol list
// function arrToList(newArr) {
//   for (var x = newArr.length - 1; x >=0 ; x--) {
//     var list = document.getElementById('ulList');
//     var li = document.createElement('li');
//     li.innerHTML = newArr[x];
//     list.insertBefore(li, list.firstChild)
//   }
// }

},{}],2:[function(require,module,exports){
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

},{"./../js/scripts.js":1}]},{},[2]);
