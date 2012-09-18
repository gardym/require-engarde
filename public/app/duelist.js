define(['jquery', 'mover', 'swords', 'canvas', 'insults'],
    function($, mover, swords, canvas, insults) {

  var template = $('.sword-fighter');

  var create = function(facing) {
    var duelist = template.clone();

    duelist.fight = function() {
      swords.swing(duelist, facing);
      mover.floatLikeAButterfly(duelist);
    };

    duelist.insult = function(done) {
      canvas.text(insults.insult());
      setTimeout(done, 2000);
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
