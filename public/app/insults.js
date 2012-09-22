define(['jquery', 'text!txt/insults.txt', 'text!txt/retorts.txt'],
       function($, insults_text, retorts_text) {

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

  return {
    insult: insult,
    retort: retort
  };
});
