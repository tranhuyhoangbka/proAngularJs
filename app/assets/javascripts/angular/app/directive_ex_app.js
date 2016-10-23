angular.module('directiveExApp', ['templates'])
  .directive('tap', function() {
    return function(scope, elem, attrs) {
      elem.on('touchstart touchend', function(e) {
        console.log(e.type);
        scope.$apply(attrs['tap']);
      });
    }
  });
