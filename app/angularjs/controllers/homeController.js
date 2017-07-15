/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la page d'accueil
 */

var homeApp = angular.module('homeApp', []);

/**
 * Configuration du module de la page d'accueil
 */

homeApp.config([
    '$translateProvider',
    function (
        $translateProvider) {

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

/**
 * Contrôleur du module de la page d'accueil
 */

homeApp.controller('homeController', [
    '$scope',
    function (
        $scope) {
    }]);