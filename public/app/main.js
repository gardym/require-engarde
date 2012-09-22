require(['jquery', 'canvas', 'duelist'],
        function($, canvas, duelist) {

  var leftie = duelist.create({facing: 'right'});
  var rightie = duelist.create({facing: 'left'});

  canvas.add(leftie);
  canvas.add(rightie);

  leftie.fight(rightie);
  leftie.insult(rightie);
});
