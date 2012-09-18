require(['jquery', 'canvas', 'duelist', 'insults'], function($, canvas, duelist, insults) {

  var leftie = duelist.create('right');
  var rightie = duelist.create('left');

  canvas.add(leftie);
  canvas.add(rightie);

  leftie.fight();
  rightie.fight();

  canvas.text(insults.insult());
  setInterval(function() {
    canvas.text(insults.insult());
  }, 4000);

  setTimeout(function() {
    canvas.text(insults.retort());
    setInterval(function() {
      canvas.text(insults.retort());
    }, 4000);
  }, 2000);
});
