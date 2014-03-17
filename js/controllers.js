var phonecatApp = angular.module('darlehenApp', []);

phonecatApp.controller('DarlehenCtrl', function ($scope) {
  $scope.months = function() {
    return [
    {'value': 'foobar' },
    {'value': 'fnord' }
    ];
  };

  $scope.purchasePrice = '10000';
});
