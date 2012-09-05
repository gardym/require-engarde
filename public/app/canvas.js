define(['jquery'], function($) {
  var canvasElement = $('.canvas');

  var add = function(duelist) {
    canvasElement.append(duelist);
    duelist.show().css('display', 'inline-block');
  };

  return {
    add: add
  };
});
