"use strict";
angular.module('myApp').controller('myController', myController);
myController.$inject = ["$location", "$http"];

function myController($location, $http) {
  var vm = this;
  console.log("ok");
  console.log($location.host());
  vm.model = {
    name: "huyhoang"
  }
  vm.test = "let start";
  $http.get('/action_list').then(function(response) {
    vm.model.items = response.data;
  }, function() {
    vm.model.items = [{desc: "Errors"}];
  });
  console.log(vm.model.items);

  vm.incompleteCount = function() {
    var count = 0;
    angular.forEach(vm.model.items, function(item) {
      if (item.done === 'No') {count++;}
    });
    return count;
  };
  vm.warningLevel = function() {
    return vm.incompleteCount() < 3 ? "label-success" : "label-warning";
  }
  vm.addNewItem = function(actionText) {
    vm.model.items.push({desc: actionText, done: 'No'});
  }
}
