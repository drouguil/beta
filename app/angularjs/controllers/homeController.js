var homeApp = angular.module('homeApp', []);

homeApp.controller('homeController', ['$scope', function($scope){
    $scope.test = 'HOME';
}]);