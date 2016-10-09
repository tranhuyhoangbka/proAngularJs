'use strict';
angular.module('cart', [])
  .factory('cart', function() {
    var cartData = [];
    return {
      addProduct: function(id, name, price) {
        var addedToExistingItem = false;
        _.forEach(cartData, function(p, index) {
          if(p.id === id) {
            cartData[index].count++;
            addedToExistingItem = true;
            return;
          }
        });
        if(!addedToExistingItem) {
          cartData.push({count: 1, id: id, name: name, price: price});
        }
      },

      removeProduct: function(id) {
        _.forEach(cartData, function(p, index) {
          if(p.id === id) {
            cartData.splice(index, 1);
            return;
          }
        });
      },

      getProducts: function() {
        return cartData;
      }
    };
  })
  .directive('cartSumary', function(cart) {
    return {
      restrict: "E",
      templateUrl: "cartSumary.html",
      controller: function($scope) {
        var cartData = cart.getProducts();
        $scope.total = function() {
          var total = 0;
          _.forEach(cartData, function(p, index) {
            total += p.price * p.count;
          });
          return total;
        };

        $scope.itemCount = function() {
          var count = 0;
          _.forEach(cartData, function(p) {
            count += p.count;
          });
          return count;
        };
      }
    };
  });
