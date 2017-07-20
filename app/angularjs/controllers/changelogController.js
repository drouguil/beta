/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la popin des changelogs
 */

var changelogApp = angular.module('changelogApp', []);

/**
 * Configuration du module de la popin des changelogs
 */

changelogApp.config([
    '$translateProvider',
    function (
        $translateProvider) {

        /**
         * Dictionnaire Français
         */

        $translateProvider.translations('fr', {
            CLOSE_BTN: 'Compris'
        });

        /**
         * Dictionnaire Anglais
         */

        $translateProvider.translations('en', {
            CLOSE_BTN: 'Understand'
        });
    }]);

/**
 * Contrôleur du module de la popin des changelogs
 */

changelogApp.controller('changelogController', [
    '$scope',
    '$rootScope',
    'dialogManager',
    function (
        $scope,
        $rootScope,
        dialogManager) {
        
        /**
         * Ferme la popin des changelogs
         * @function closeDialog
         * @public
         */

        $scope.closeDialog = function () {
            dialogManager.closeDialogs();
        }

    }]);