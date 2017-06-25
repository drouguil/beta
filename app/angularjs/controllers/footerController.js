var footerApp = angular.module('footerApp', []);

footerApp.controller('footerController', ['$scope', function($scope){
    $scope.test = 'FOOTER';
}]);