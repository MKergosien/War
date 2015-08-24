define(function(require) { 
  var $ = require("jquery");

  return {
    getCardsLeft: function(callback){
      var queryURL = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
      $.ajax({
        url: queryURL
      }).done(function(data) {
        console.log(data);
        callback.call(this, data);
      });              
    }
  };

  return {
    getCardsRight: function(callback){
      var queryURL = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
      $.ajax({
        url: queryURL
      }).done(function(data) {
        console.log(data);
        callback.call(this, data);
      });              
    }
  };


return {
    drawCardsRight: function(callback){
      var queryURL = "http://deckofcardsapi.com/api/deck/" + deck_id + "/draw/?count=2";
      $.ajax({
        url: queryURL
      }).done(function(data) {
        console.log(data);
        callback.call(this, data);
      });              
    }
  };


return {
    drawCardsLeft: function(callback){
      var queryURL = "http://deckofcardsapi.com/api/deck/" + deck_id + "/draw/?count=2";
      $.ajax({
        url: queryURL
      }).done(function(data) {
        console.log(data);
        callback.call(this, data);
      });              
    }
  };





});