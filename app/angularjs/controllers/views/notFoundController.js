/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la page 404
 */

var notFoundCtrl = angular.module('notFoundCtrl', []);

/**
 * Configuration du module de la page 404
 */

notFoundCtrl.config([
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

notFoundCtrl.controller('notFoundController', [
    '$scope',
    '$rootScope',
    function (
        $scope,
        $rootScope) {

        /**
         * Prévient l'application que la vue est chargée
         * @public
         */

        $scope.$on('$viewContentLoaded', function () {
            $rootScope.viewIsLoaded = true;
        });
    }]);