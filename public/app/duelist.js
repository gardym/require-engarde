define(['jquery', 'mover', 'swords', 'canvas', 'insults'],
    function($, mover, swords, canvas, insults) {

  var template = $('.sword-fighter');

  var create = function(facing) {
    var duelist = template.clone();

    duelist.fight = function(opponent) {
      swords.swing(duelist, facing);
      mover.floatLikeAButterfly(duelist);

      if(opponent) {
        opponent.fight();
      }
    };

    duelist.insult = function(opponent) {
      canvas.text(insults.insult());
      setTimeout(function() {
        opponent.retort();
      }, 2000);
    };

    duelist.retort = function() {
      canvas.text(insults.retort());
    };

    return duelist;
  };

  return {
    create: create,
  };

});
