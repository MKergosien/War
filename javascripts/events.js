define(function(require) {
  var $ = require("jquery");
  var get = require("get-data");
  var draw = require("draw-card");
  var val = require("value");
  var comp = require("compare-cards");
  var temp = require("templates");
  var p1id;
  var p2id;

  $("#newgame").click(function(click) {
    console.log("click", click);
    get().then(function(data) {
      data.player = "Player 1";
      p1id = data.deck_id;
      console.log("player1 data", data);
      return data;
    });
    get().then(function(data) {
      data.player = "Player 2";
      p2id = data.deck_id;
      console.log("player2 data", data);
      return data;
    });
  });

  $(document).on("click", "#draw", function() {
    draw(p1id).then(function(data) {
      data.player = "Player 1";
      val(data);
      console.log("valuep1", data);
      $("#player1").html(temp.playerTemp(data));
      draw(p2id).then(function(data) {
        data.player = "Player 2";
        val(data);
        console.log("valuep2", data);
        $("#player2").html(temp.playerTemp(data));
        comp();
      });
    });
  });  


});


