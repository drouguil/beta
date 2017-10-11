/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la popin d'aide
 */

let helpCtrl = angular.module('helpCtrl', []);

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
                CLOSE_BTN: 'Fermer'
            });

            /**
             * Dictionnaire Anglais
             */

            $translateProvider.translations('en', {
                HELP_TITLE: 'Help',
                CLOSE_BTN: 'Close'
            });
    }]);

/**
 * Contrôleur du module de la popin d'aide
 */

helpCtrl.controller('helpController', [
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
         * Ferme la popin d'aide
         * @function closeDialog
         * @public
         */

        $scope.closeDialog = function () {
            dialogManager.closeDialogs();
        }

    }]);