define(function(require) {
  var $ = require("jquery");
  var bootstrap = require("bootstrap");
  var hbs = require("hbs");
  var _ = require("lodash");
  var fb = require("firebase");
  var get = require("get-data");
  var pop = require("populate-dom");


  $("#drawLeft").click( function(click){
    console.log("click", click);
    get.getCardsLeft();
    get.drawCardsLeft();
  });


   $("#drawRight").click( function(click){
    console.log("click", click);
    get.getCardsRight();
    get.drawCardsRight();
  });
});