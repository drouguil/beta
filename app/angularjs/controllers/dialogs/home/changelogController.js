/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la popin des changelogs
 */

let changelogCtrl = angular.module('changelogCtrl', []);

/**
 * Configuration du module de la popin des changelogs
 */

changelogCtrl.config([
    '$translateProvider',
    function (
        $translateProvider) {

        /**
         * Dictionnaire Français
         */

        $translateProvider.translations('fr', {
            CHANGELOG_TITLE: 'Changements du site par date',
            CLOSE_BTN: 'Fermer'
        });

        /**
         * Dictionnaire Anglais
         */

        $translateProvider.translations('en', {
            CHANGELOG_TITLE: 'Website\'s updates per date',
            CLOSE_BTN: 'Close'
        });
    }]);

/**
 * Contrôleur du module de la popin des changelogs
 */

changelogCtrl.controller('changelogController', [
    '$scope',
    '$rootScope',
    'dialogManager',
    'appConfig',
    function (
        $scope,
        $rootScope,
        dialogManager,
        appConfig) {
        
        /**
         * Chemin de l'icône de fermeture de la popin
         * @public
         */

        $scope.closeIconPath = appConfig.paths.svgDialogs + 'close.svg';

        /**
         * Ferme la popin des changelogs
         * @function closeDialog
         * @public
         */

        $scope.closeDialog = function () {
            dialogManager.closeDialogs();
        }

    }]);