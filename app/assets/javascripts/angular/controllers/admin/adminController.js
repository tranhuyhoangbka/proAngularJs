angular.module('sportsStoreAdmin').constant('authUrl', 'http://localhost:3000/auths')
  .constant('logoutUrl', 'http://localhost:3000/logout')
  .constant('ordersUrl', 'http://localhost:3000/orders')
  .controller('authController', ['$scope', '$http', '$location', 'authUrl', function($scope, $http, $location, authUrl) {
    $scope.authenticate = function(email, pass) {
      $http.post(authUrl, {email: email, password: pass}, {withCredentials: true})
        .success(function(data) {
          $location.path('/main')
        }).error(function(error) {
          $scope.authenticationError = error;
        });
    };
  }])
  .controller('mainController', ['$scope', '$http', '$location', 'logoutUrl', function($scope, $http, $location, logoutUrl) {
    $scope.screens = ['Products', 'Orders'];
    $scope.current = $scope.screens[0];

    $scope.setScreen = function(index) {
      $scope.current = $scope.screens[index];
    }

    $scope.getScreen = function() {
      return $scope.current == 'Products' ? 'admin/adminProducts.html' : 'admin/adminOrders.html';
    }

    $scope.logout = function() {
      $http.delete(logoutUrl).success(function(msg) {
        $location.url('http://localhost:3000/products');
      });
    }
  }])
  .controller('orderController', ['$scope', '$http', 'ordersUrl', function($scope, $http, ordersUrl) {
    $http.get(ordersUrl).success(function(data) {
      $scope.orders = data;
    }).error(function(error) {
      $scope.error = error;
    });

    $scope.selectedOrder;
    $scope.selectOrder = function(order) {
      $scope.selectedOrder = order;
    };

    $scope.calcTotal = function(order) {
      var total = 0;
      _.forEach(order.products, function(p) {
        total += p.price * p.count;
      });
      return total;
    };

    $scope.convertToObj = function(order) {
      if(angular.isString(order.products)) {
        order.products = JSON.parse(order.products);
      }
      return order.products;
    };
  }]);
