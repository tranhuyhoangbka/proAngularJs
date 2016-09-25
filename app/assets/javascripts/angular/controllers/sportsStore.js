angular.module('sportsStore')
  .constant('dataUrl', 'http://localhost:3000/products.json')
  .controller('sportsStoreCtrl', ['$scope', '$http', 'dataUrl', function($scope, $http, dataUrl){
    $scope.data = {};
    $http.get(dataUrl).success(function(data) {
      $scope.data.products = data;
    }).error(function(error) {
      $scope.data.error = error;
    });
  }]);
