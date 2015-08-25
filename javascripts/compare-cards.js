define(function(require) {
  var $ = require("jquery");
      
  return function() {
    var value1 = $("#player1").children("img").attr("value");
    console.log("player1 value", value1);
    var value2 = $("#player2").children("img").attr("value");
    console.log("player2 value", value2);

  };
});