/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la popin d'aide
 */

var helpCtrl = angular.module('helpCtrl', []);

/**
 * Configuration du module de la popin d'aide
 */

helpCtrl.config([
    '$translateProvider',
    function (
        $translateProvider) {

        /**
         * Dictionnaire Français
         */

        $translateProvider.translations('fr', {
            HELP_TITLE: 'Aide',
            CLOSE_BTN: 'Compris'
        });

        /**
         * Dictionnaire Anglais
         */

        $translateProvider.translations('en', {
            HELP_TITLE: 'Help',
            CLOSE_BTN: 'Understand'
        });
    }]);

/**
 * Contrôleur du module de la popin des changelogs
 */

helpCtrl.controller('changelogController', [
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