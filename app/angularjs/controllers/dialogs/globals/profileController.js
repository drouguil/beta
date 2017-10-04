/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la popin du profil
 */

let profileCtrl = angular.module('profileCtrl', []);

/**
 * Configuration du module de la popin du profil
 */

profileCtrl.config([
    '$translateProvider',
    function (
        $translateProvider) {

            /**
             * Dictionnaire Français
             */

            $translateProvider.translations('fr', {
                PROFILE_TITLE: 'Profil',
                CLOSE_BTN: 'Fermer'
            });

            /**
             * Dictionnaire Anglais
             */

            $translateProvider.translations('en', {
                PROFILE_TITLE: 'Profile',
                CLOSE_BTN: 'Close'
            });
    }]);

/**
 * Contrôleur du module de la popin du profil
 */

profileCtrl.controller('profileController', [
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
         * Ferme la popin du profil
         * @function closeDialog
         * @public
         */

        $scope.closeDialog = function () {
            dialogManager.closeDialogs();
        }

    }]);