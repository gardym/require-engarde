define(['jquery'], function($) {

  var backAndForward = function(duelist) {

    var moveRight = true;

    setInterval(function() {
      duelist.css('left', moveRight ? '200px' : '1px');
      moveRight = !moveRight;
    }, 700);

  };

  return {
    backAndForward: backAndForward
  };
});
