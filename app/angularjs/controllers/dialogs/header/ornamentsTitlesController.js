/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la popin des ornements/titres
 */

let ornamentsTitlesCtrl = angular.module('ornamentsTitlesCtrl', []);

/**
 * Configuration du module de la popin des ornements/titres
 */

ornamentsTitlesCtrl.config([
    '$translateProvider',
    function (
        $translateProvider) {

            /**
             * Dictionnaire Français
             */

            $translateProvider.translations('fr', {
                ORNAMENTS_TITLES_TITLE: 'Ornements et titres',
                CLOSE_BTN: 'Fermer'
            });

            /**
             * Dictionnaire Anglais
             */

            $translateProvider.translations('en', {
                ORNAMENTS_TITLES_TITLE: 'Ornaments and titles',
                CLOSE_BTN: 'Close'
            });
    }]);

/**
 * Contrôleur du module de la popin des ornements/titres
 */

ornamentsTitlesCtrl.controller('ornamentsTitlesController', [
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
         * Ferme la popin des ornements/titres
         * @function closeDialog
         * @public
         */

        $scope.closeDialog = function () {
            dialogManager.closeDialogs();
        }

    }]);