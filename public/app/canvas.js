define(['jquery'], function($) {
  var canvasElement = $('.canvas');
  var textElement = canvasElement.find('.text');

  var add = function(duelist) {
    canvasElement.append(duelist);
    duelist.show().css('display', 'inline-block');
  };

  var text = function(displayText) {
    textElement.html(displayText);
  };

  return {
    add: add,
    text: text
  };
});
