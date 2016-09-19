angular.module('starter.controllers', [])

.controller('AboutController', function () {
})

.controller('MetricController', function($scope) {
  $scope.data = {};
  $scope.calculateMetric = function() {
    var person = new Person({
      weight: $scope.data.weight,
      height: $scope.data.height
    });
    person.calculate_metric();
    $scope.person = person;
  };
})

.controller('ImperialController', function($scope) {
  $scope.data = {};
  $scope.calculateImperial = function() {
    var person = new Person({
      weight_imperial: $scope.data.weight_imperial,
      height_feet: $scope.data.height_feet,
      height_inches: $scope.data.height_inches
    });
    person.calculate_imperial();
    $scope.person = person;
  };
});
