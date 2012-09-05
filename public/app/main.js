require(['jquery', 'canvas', 'duelist'], function($, canvas, duelist) {

  var leftie = duelist.create('right');
  var rightie = duelist.create('left');

  canvas.add(leftie);
  canvas.add(rightie);

  leftie.fight();
  rightie.fight();
});
