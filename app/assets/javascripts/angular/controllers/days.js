angular.module('exampleApp.controllers', [])
  .controller('dayController', function($scope, days) {
    $scope.day = days.tomorrow;
  });
