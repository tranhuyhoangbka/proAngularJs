angular.module('directiveExApp').controller('defaultController', function($scope) {
  $scope.todos = [
    { id: 1, action: "Get groceries", complete: true, place: 1},
    {id: 2, action: "Call plumber", complete: false, place: 1},
    {id: 3, action: "Buy running shoes", complete: true ,place: 2},
    {id: 4, action: "Buy flowers", complete: false, place: 3 },
    {id: 5, action: "Call family", complete: false, place: 2}
  ];
  $scope.categories = [
    {id: 1, name: "Home"},
    {id: 2, name: "Office"},
    {id: 3, name: "Beach"}
  ];
  $scope.data = {
    rowColor: "Blue",
    columnColor: "Green"
  };
  $scope.buttonNames = ['Red', 'Green', 'Blue'];
  $scope.settings = {
    Rows: 'Red',
    Columns: 'Green'
  };
  $scope.message = "Tap Me!";
  $scope.dataValue = false;
  $scope.requireValue = true;
  $scope.matchPattern = new RegExp('^[a-z]');

  $scope.viewFile = function() {
    return $scope.showList ? 'list.html' : '/table.html';
  }
  $scope.showText = function() {
    return $scope.showList;
  }

  $scope.reportChange = function() {
    console.log('Display content: ' + $scope.viewFile());
  };

  $scope.handleEvent = function(e) {
    console.log('event type: ' + e.type);
    $scope.data.columnColor = e.type === 'mouseenter' ? "Green" : "Red";
  }

  $scope.addNewItem = function(newItem) {
    if(angular.isDefined(newItem) && angular.isDefined(newItem.action) &&
      angular.isDefined(newItem.location)) {
      $scope.todos.push({
        action: newItem.action + ' (' + newItem.location + ')',
        complete: false
      });
    }
  };

  $scope.addUser = function(userDetails, myForm) {
    if(myForm.$valid) {
      $scope.message = userDetails.name + ' (' + userDetails.email + ') (' + userDetails.agreed + ')';
    } else {
      console.log(myForm.userEmail.$error);
      $scope.showValidation = true;
    }
  };
  $scope.message = "Ready";
  $scope.getError = function(error) {
    if(angular.isDefined(error)) {
      if(error.required) {
        return 'Please enter a value';
      } else {
        return 'Please enter a valid email address';
      }
    }
  };

  $scope.getCategoryNameBy = function(item) {
    var cate = _.find($scope.categories, {id: item.place});
    if(!cate) return;
    return cate.name;
  };
});
