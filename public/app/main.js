require(['jquery', 'canvas', 'duelist', 'insults'], function($, canvas, duelist, insults) {

  var leftie = duelist.create('right');
  var rightie = duelist.create('left');

  canvas.add(leftie);
  canvas.add(rightie);

  leftie.fight();
  rightie.fight();

  insults.yell();
});
