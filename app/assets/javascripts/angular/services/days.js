'use strict';
var now = new Date();
angular.module('exampleApp.services', [])
  .value('nowValue', now)
  .service('days', function(nowValue) {
  this.tomorrow = nowValue.getDay() + 1;
}).config(function() {
  console.log('services module run: (no time)');
}).run(function(startTime) {
  console.log('services module run: ' + startTime);
});

