angular.module('exampleApp', ['exampleApp.controllers', 'exampleApp.filters', 'exampleApp.directives', 'exampleApp.services'])
  .constant('startTime', new Date().toLocaleTimeString())
  .config(function(startTime) {
    console.log('Main module config: ' + startTime);
  }).run(function(startTime) {
    console.log('Main module run: ' + startTime);
  })

