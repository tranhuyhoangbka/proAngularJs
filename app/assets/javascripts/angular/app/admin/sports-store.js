angular.module('sportsStoreAdmin', ['ngRoute', 'templates', 'ngResource'])
  .config(function($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'admin/adminLogin.html'
    }).when('/main', {
      templateUrl: 'admin/adminMain.html'
    }).otherwise({
      redirectTo: '/login'
    })
  });
