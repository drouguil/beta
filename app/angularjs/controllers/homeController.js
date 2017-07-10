'use strict';
var homeApp = angular.module('homeApp', []);

homeApp.config([
    '$translateProvider', 
    function($translateProvider) {
    
    /**
     * Dictionnaire Français
     */

    $translateProvider.translations('fr', {
        BTN_DIMENSIONS: 'Gestion des portails'
    });

    /**
     * Dictionnaire Anglais
     */

    $translateProvider.translations('en', {
        BTN_DIMENSIONS: 'Portals\' Management'
    });
}]);

homeApp.controller('homeController', ['$scope', function($scope){
}]);