/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la popin des succès
 */

let achievementsCtrl = angular.module('achievementsCtrl', []);

/**
 * Configuration du module de la popin des succès
 */

achievementsCtrl.config([
    '$translateProvider',
    function (
        $translateProvider) {

            /**
             * Dictionnaire Français
             */

            $translateProvider.translations('fr', {
                ACHIEVEMENTS_TITLE: 'Succès',
                CLOSE_BTN: 'Fermer'
            });

            /**
             * Dictionnaire Anglais
             */

            $translateProvider.translations('en', {
                ACHIEVEMENTS_TITLE: 'Achievements',
                CLOSE_BTN: 'Close'
            });
    }]);

/**
 * Contrôleur du module de la popin des succès
 */

achievementsCtrl.controller('achievementsController', [
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
         * Ferme la popin des succès
         * @function closeDialog
         * @public
         */

        $scope.closeDialog = function () {
            dialogManager.closeDialogs();
        }

    }]);