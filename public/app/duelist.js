define(['jquery', 'mover', 'animator'], function($, mover, animator) {

  var template = $('.sword-fighter');

  var create = function(facing) {
    var duelist = template.clone();

    duelist.fight = function() {
      animator.animate(duelist, facing);
      mover.backAndForward(duelist);
    };

    return duelist;
  };

  return {
    create: create
  };

});
