/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la page 404
 */

var notFoundApp = angular.module('notFoundApp', []);

/**
 * Configuration du module de la page 404
 */

notFoundApp.config([
    '$translateProvider',
    function (
        $translateProvider) {

        /**
         * Dictionnaire Français
         */

        $translateProvider.translations('fr', {
        });

        /**
         * Dictionnaire Anglais
         */

        $translateProvider.translations('en', {
        });
    }]);

/**
 * Contrôleur du module de la page d'accueil
 */

notFoundApp.controller('notFoundController', [
    '$scope',
    '$rootScope',
    function (
        $scope,
        $rootScope) {

        /**
         * Prévient l'application que la vue est chargée
         */

        $scope.$on('$viewContentLoaded', function () {
            $rootScope.viewIsLoaded = true;
        });
    }]);