require(['jquery', 'canvas', 'duelist', 'insults'], function($, canvas, duelist, insults) {

  var leftie = duelist.create('right');
  var rightie = duelist.create('left');

  canvas.add(leftie);
  canvas.add(rightie);

  leftie.fight();
  rightie.fight();

  setInterval(function() {
    leftie.insult(function() {
      rightie.retort();
    });
  }, 4000);
});
