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
                PROFILE_ERROR: 'Une erreur est survenue lors de la récupération du profil',
                CLOSE_BTN: 'Fermer'
            });

            /**
             * Dictionnaire Anglais
             */

            $translateProvider.translations('en', {
                PROFILE_TITLE: 'Profile',
                PROFILE_ERROR: 'An error has occured during the recovery of the profile',
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
    'daoManager',
    'toastManager',
    'appConfig',
    function (
        $scope,
        $rootScope,
        dialogManager,
        daoManager,
        toastManager,
        appConfig) {

        /**
         * Utilisateur connecté
         * @public
         */

        $scope.user = {
            email: undefined,
            id: undefined,
            login: undefined,
            server_id: undefined,
            username: undefined,
        }

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

        function init() {
            daoManager.getConnectedUser().then(function(response) {
                console.log(response);
            }, function(error) {
                toastManager.showSimpleToast($filter('translate')('PROFILE_ERROR'), 'error');
            })
        }

        init();

    }]);