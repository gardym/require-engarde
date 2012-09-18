define(['jquery', 'canvas', 'text!insults.txt', 'text!retorts.txt'],
    function($, canvas, insults_text, retorts_text) {

  var insults = insults_text.split('\n');
  var retorts = retorts_text.split('\n');

  var padding = new Array(12).join(' ');

  var abuseIndex = 0;

  var insult = function() {
    abuseIndex = Math.floor(Math.random() * insults.length);
    return formatAbuse(insults[abuseIndex], padding + '/');
  };

  var retort = function() {
    return formatAbuse(retorts[abuseIndex], padding + padding + '\\');
  };

  var formatAbuse = function(text, marker) {
    return text + '\n\n' + marker;
  };

  var yell = function() {
    canvas.text(insult());
    setInterval(function() {
      canvas.text(insult());
    }, 4000);

    setTimeout(function() {
      canvas.text(retort());
      setInterval(function() {
        canvas.text(retort());
      }, 4000);
    }, 2000);
  };

  return {
    yell: yell
  };
});
