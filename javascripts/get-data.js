define(function(require){
  var $ = require('jquery'),
      Q = require('q');
  
  return function() {
    var deferred = Q.defer();
    $.ajax({
            url: "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2",
            method: "GET"
          }).done(function(data){
            deferred.resolve(data);
          }).fail(function(xhr, status, error) {
            deferred.reject(error);
          });

    return deferred.promise;
  };
  

});