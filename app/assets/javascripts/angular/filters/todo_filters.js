'use strict';
angular.module('myApp').filter('checkedItems', function(){
  return function(items, showCompleted) {
    var result = [];
    angular.forEach(items, function(item) {
      if(item.done === 'No' || showCompleted) {
        result.push(item);
      }
    });
    return result;
  }
});
