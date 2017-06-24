var app = angular.module('mainApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: './app/views/home.html'
            }).
            when('/404', {
                templateUrl: './app/views/404.html'
            }).
            otherwise({
                redirectTo: '/404'
            });
    }]);