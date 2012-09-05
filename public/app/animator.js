define(function() {

  var hideFrame = function(duelist, facing, number) {
    duelist.find('.frame.' + facing + '[frame=' + number + ']').hide();
  };

  var showFrame = function(duelist, facing, number) {
    duelist.find('.frame.' + facing + '[frame=' + number + ']').show();
  };

  var animate = function(duelist, facing) {
    var currentFrame = 0;
    setInterval(function animateFrame() {
      var nextFrame = currentFrame % 2 + 1;

      hideFrame(duelist, facing, currentFrame);
      showFrame(duelist, facing, nextFrame);

      currentFrame = nextFrame;
    }, 200);
  };

  return {
    animate: animate
  };
});
