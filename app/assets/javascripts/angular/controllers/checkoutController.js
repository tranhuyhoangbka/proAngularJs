angular.module('sportsStore').controller('cartSummaryController', function($scope, cart) {
  $scope.cartData = cart.getProducts();

  $scope.total = function() {
    var total = 0;
    _.forEach($scope.cartData, function(p) {
      total += p.price * p.count;
    });
    return total;
  };

  $scope.remove = function(id) {
    cart.removeProduct(id);
  };
});
