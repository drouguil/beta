/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la popin d'identification
 */

var identificationCtrl = angular.module('identificationCtrl', []);

/**
 * Configuration du module de la popin d'identification
 */

identificationCtrl.config([
    '$translateProvider',
    function (
        $translateProvider) {

        /**
         * Dictionnaire Français
         */

        $translateProvider.translations('fr', {
            REGISTER_TITLE: 'Inscription',
            LOGIN_TITLE: 'Connexion',
            REGISTER_LINK: 'Je n\'ai pas de compte',
            LOGIN_LINK: 'J\'ai déjà un compte',
            CLOSE_BTN: 'Fermer'
        });

        /**
         * Dictionnaire Anglais
         */

        $translateProvider.translations('en', {
            REGISTER_TITLE: 'Register',
            LOGIN_TITLE: 'Login',
            REGISTER_LINK: 'I haven\'t an acccount',
            LOGIN_LINK: 'I have already an account',
            CLOSE_BTN: 'Close'
        });
    }]);

/**
 * Contrôleur du module de la popin d'identification
 */

identificationCtrl.controller('identificationController', [
    '$scope',
    '$rootScope',
    'dialogManager',
    'appConfig',
    'isRegister',
    function (
        $scope,
        $rootScope,
        dialogManager,
        appConfig,
        isRegister) {

        /**
         * Chemin de l'icône d'inscription
         * @public
         */

        $scope.registerIconPath = appConfig.paths.svg + 'register.svg';

        /**
         * Chemin de l'icône de connexion
         * @public
         */

        $scope.loginIconPath = appConfig.paths.svg + 'login.svg';

        /**
         * Détermine si l'on doit afficher le formulaire d'inscription (true) ou le formulaire de connexion (false)
         * @public
         */

        $scope.isRegister = false;

        /**
         * Chemin de l'icône de fermeture de la popin
         * @public
         */

        $scope.closeIconPath = appConfig.paths.svg + 'close.svg';

        /**
         * Ferme la popin d'identification
         * @function closeDialog
         * @public
         */

        $scope.closeDialog = function () {
            dialogManager.closeDialogs();
        };

        /**
         * Passe du formulaire à celui de connexion et inversement
         * @function changeForm
         * @public
         */

        $scope.changeForm = function () {
            $scope.isRegister = !$scope.isRegister;
        };

        /**
         * Passe du formulaire à celui de connexion et inversement via un broadcast
         * @function changeForm
         * @public
         */

        $scope.$on('changeForm', function() {
            $scope.changeForm();
        });

        /**
         * Retourne le texte à afficher sur le bouton de changement de formulaire
         * @function changeFormText
         * @public 
         * @return Texte du bouton de changement de formulaire
         */

        $scope.changeFormText = function () {
            if ($scope.isRegister) {
                return 'LOGIN_LINK';
            }
            else {
                return 'REGISTER_LINK';
            }
        }

        /**
         * Initialise la popin d'identification
         * @function init
         * @private
         */

        function init() {
            $scope.isRegister = isRegister;
        };

        init();

    }]);