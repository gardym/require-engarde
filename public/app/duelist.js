define(['jquery', 'mover', 'animator', 'canvas', 'insults'],
    function($, mover, animator, canvas, insults) {

  var template = $('.sword-fighter');

  var create = function(facing) {
    var duelist = template.clone();

    duelist.fight = function() {
      animator.animate(duelist, facing);
      mover.backAndForward(duelist);
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
