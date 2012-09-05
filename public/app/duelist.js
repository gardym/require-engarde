define(['jquery'], function($) {

  var template = $('.sword-fighter');

  var create = function(facing) {
    var duelist = template.clone();

    duelist.fight = function() {
      var currentFrame = 0;

      setInterval(function animateFrame() {
        var nextFrame = currentFrame % 2 + 1;

        duelist.find('.frame.' + facing + '[frame=' + currentFrame + ']').hide();
        duelist.find('.frame.' + facing + '[frame=' + nextFrame + ']').show();

        currentFrame = nextFrame;
      }, 200);
    };

    return duelist;
  };

  return {
    create: create
  };

});
