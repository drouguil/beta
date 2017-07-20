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
            BTN_DIMENSIONS: 'Gestion des portails',
            BTN_CHANGELOG: 'Changements du site',
            PARTNERS: 'Partenaires'
        });

        /**
         * Dictionnaire Anglais
         */

        $translateProvider.translations('en', {
            BTN_DIMENSIONS: 'Portals\' Management',
            BTN_CHANGELOG: 'Website\'s update',
            PARTNERS: 'Partners'
        });
    }]);

/**
 * Contrôleur du module de la page d'accueil
 */

homeApp.controller('homeController', [
    '$scope',
    '$rootScope',
    'dialogManager',
    function (
        $scope,
        $rootScope,
        dialogManager) {

        /**
         * Affiche la popin des changelogs
         * @function
         * @public
         * @param {Objet} ev Endroit d'où l'on veut faire apparaitre la popin (avec $event)
         */

        $scope.showChangelogDialog = function (ev) {
            dialogManager.showChangelogDialog(ev);
        }

        /**
         * Prévient l'application que la page est chargée
         */

        $scope.$on('$viewContentLoaded', function () {
            $rootScope.viewIsLoaded = true;
        });

    }]);