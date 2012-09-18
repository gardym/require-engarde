define(function() {

  var animate = function(frames, rate) {
    var currentFrame = 0;
    setInterval(function animateFrame() {

      frames.forEach(function(f) { f.hide() });
      frames[currentFrame].show();

      currentFrame = (currentFrame + 1) % frames.length;
    }, rate);
  };

  return {
    animate: animate
  };
});
