'use strict';
angular.module('myApp').controller('jsdemoController', jsdemoController);
jsdemoController.$inject = [];
function jsdemoController() {
  console.log(testing);
  console.log(angular.isString('Hello') + ' ' + angular.isArray(23));
  console.log('Iam' + angular.lowercase('Shutting'));
  console.log('Iam' + angular.uppercase('Whipering'));
  var myData = {
    name: "Adam",
    weather: "sunny",
    gettings: function(){
      console.log("hello, I am "+this.name+". It is " + this.weather);
    }
  };
  myData.gettings();
  var myExtendedObject = {
    city: "London"
  };
  angular.copy(myData, myExtendedObject);
  console.log(myData);
  console.log(myExtendedObject);
  console.log('name' in myData);
  var printMessage = function(unknowObject) {
    if(angular.isFunction(unknowObject)) {
      unknowObject();
    } else {
      console.log(unknowObject);
    }
  };

  var variable1 = function() {
    console.log('hello');
  }

  var variable2 = 'Goobye';

  printMessage(variable1);
  printMessage(variable2);
}
