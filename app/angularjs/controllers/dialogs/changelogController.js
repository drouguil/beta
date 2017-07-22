/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la popin des changelogs
 */

var changelogCtrl = angular.module('changelogCtrl', []);

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
            CLOSE_BTN: 'Compris'
        });

        /**
         * Dictionnaire Anglais
         */

        $translateProvider.translations('en', {
            CHANGELOG_TITLE: 'Website\'s updates per date',
            CLOSE_BTN: 'Understand'
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

        $scope.closeIconPath = appConfig.paths.svg + 'close.svg';

        /**
         * Ferme la popin des changelogs
         * @function closeDialog
         * @public
         */

        $scope.closeDialog = function () {
            dialogManager.closeDialogs();
        }

    }]);