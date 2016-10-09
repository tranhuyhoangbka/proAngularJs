angular.module('sportsStore')
  .constant('dataUrl', 'http://localhost:3000/products.json')
  .constant('orderUrl', 'http://localhost:3000/orders')
  .controller('sportsStoreCtrl', ['$scope', '$http', '$location', 'dataUrl', 'orderUrl', 'cart', function($scope, $http, $location, dataUrl, orderUrl, cart){
    $scope.data = {};
    $http.get(dataUrl).success(function(data) {
      $scope.data.products = data;
    }).error(function(error) {
      $scope.data.error = error;
    });

    $scope.sendOrder = function(shippingDetails) {
      var order = angular.copy(shippingDetails);
      order.products = JSON.stringify(cart.getProducts());
      $http.post(orderUrl, {order: order}).success(function(data) {
        $scope.data.orderId = data.id;
        cart.getProducts().length = [];
      }).error(function(error) {
        $scope.data.orderErr = error;
      }).finally(function() {
        $location.path('/complete');
      });
    };
  }]);
