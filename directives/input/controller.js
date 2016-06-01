angular.module('todoApp', [])
  .controller('TodoListController', ['$scope', function($scope) {
  $scope.ravi="welcome "
  $scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };
}])

.controller('TodoListController1', ['$scope', function($scope) {
  $scope.ravi="welcome "
  $scope.customer = {
    name: 'Ravi',
    address: 'Bangalore'
  };
}])

.directive('myCustomer1', function() {
  return {
    templateUrl: './mycustomer.html'
  };
})

.directive('myCustomer', function() {
  return {
    template: 'Name: {{customer.name}} Address: {{customer.address}}<br/><input type="text" ng-model="customer.name">'
  };
});