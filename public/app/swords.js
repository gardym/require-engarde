define(['animator'], function(animator) {

  var swordFrameSelector = function(facing, number) {
    return '.frame.' + facing + '[frame=' + number + ']';
  };

  var findFrame = function(duelist, facing, number) {
    return duelist.find(swordFrameSelector(facing, number));
  };

  var thrashWildly = function(duelist, facing) {
    var frame1 = findFrame(duelist, facing, 1);
    var frame2 = findFrame(duelist, facing, 2);

    animator.animate([frame1, frame2], 200);
  };

  return {
    swing: thrashWildly
  };
});
