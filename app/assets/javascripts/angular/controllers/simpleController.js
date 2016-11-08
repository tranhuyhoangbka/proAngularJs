angular.module('commonApp').controller('firstController', function() {
  this.dataValue = 'Hello, Adam';

  this.reverseText = function() {
    this.dataValue = this.dataValue.split('').reverse().join('');
  };
}).controller('secondController', function($scope) {
  $scope.dataValue = 'Hello, Jacqui';

  $scope.changeCase = function() {
    $scope.dataValue = $scope.dataValue.toUpperCase();
  };

  $scope.buttonEnabled = true;
  $scope.clickCounter = 0;
  $scope.handleClick = function() {
    debugger;
    $scope.clickCounter++;
  }
  $scope.$watch('buttonEnabled', function(newValue) {
    $('#jqui button').button({disabled: !newValue});
  });
});
