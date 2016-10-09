angular.module('sportsStore', ['customFilters', 'templates', 'cart', 'ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.when('/checkout', {
      templateUrl: 'checkoutSumary.html'
    })
    .when('/products', {
      templateUrl: 'productList.html'
    })
    .when('/complete', {
      templateUrl: "thankYou.html"
    })
    .when('/placeorder', {
      templateUrl: 'placeOrder.html'
    })
    .otherwise({
      templateUrl: 'productList.html'
    });
  });
