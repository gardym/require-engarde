require(['jquery', 'canvas', 'duelist', 'insults'], function($, canvas, duelist, insults) {

  var leftie = duelist.create('right');
  var rightie = duelist.create('left');

  canvas.add(leftie);
  canvas.add(rightie);

  leftie.fight();
  rightie.fight();

  var hurlAbuse = function() {
    leftie.insult(function() {
      rightie.retort();
    });
  };

  hurlAbuse();
  setInterval(function() {
    hurlAbuse();
  }, 4000);
});
