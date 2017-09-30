/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la popin d'identification partie connexion
 */

var loginCtrl = angular.module('loginCtrl', []);

/**
 * Configuration du module de la popin d'identification partie connexion
 */

loginCtrl.config([
    '$translateProvider',
    function (
        $translateProvider) {

        /**
         * Dictionnaire Français
         */

        $translateProvider.translations('fr', {
            LOGIN_EMAIL_LABEL: 'Nom d\'utilisateur ou Adresse mail',
            PASSWORD_LABEL: 'Mot de passe',
            EMAIL_LABEL: 'Adresse mail',
            REMEMBER_LABEL: 'Rester connecté',
            REQUIRED_ERROR: 'Champ requis',
            LOGIN_BTN: 'Se connecter',
            LOGIN_SUCCESS: 'Connexion réussie',
            WRONG_ERROR: 'Identifiant ou mot de passe incorrect'

        });

        /**
         * Dictionnaire Anglais
         */

        $translateProvider.translations('en', {
            LOGIN_EMAIL_LABEL: 'Username or Email',
            PASSWORD_LABEL: 'Password',
            EMAIL_LABEL: 'Email',
            REMEMBER_LABEL: 'Remember me',
            REQUIRED_ERROR: 'Input required',
            LOGIN_BTN: 'Log in',
            LOGIN_SUCCESS: 'Successful login',
            WRONG_ERROR: 'Incorrect username or password '
        });
    }]);

/**
 * Contrôleur du module de la popin d'identification partie connexion
 */

loginCtrl.controller('loginController', [
    '$scope',
    '$rootScope',
    '$filter',
    'dialogManager',
    'toastManager',
    'daoManager',
    'appConfig',
    function (
        $scope,
        $rootScope,
        $filter,
        dialogManager,
        toastManager,
        daoManager,
        appConfig) {

        /**
         * Données de l'utilisateur renseignées dans le formulaire
         * @public
         */

        $scope.user = {
            login: '',
            password: '',
            remember: true 
        };

        $scope.wrongLogin = undefined;
        $scope.wrongPassword = undefined;

        /**
         * 
         * @function checkWrong
         * @public
         */

        $scope.checkWrong = function () {
            if($scope.wrongLogin == $scope.user.login && $scope.wrongPassword == $scope.user.password) {
                $scope.loginForm.login.$setValidity('wrong', false);
                $scope.loginForm.password.$setValidity('wrong', false);
            }
            else {
                if(!$scope.loginForm.login.$valid || !$scope.loginForm.password.$valid) {
                    $scope.loginForm.login.$setValidity('wrong', true);
                    $scope.loginForm.password.$setValidity('wrong', true);
                }
            }
        };

        /**
         * Détermine si tous les champs du formulaire de connexion sont valides
         * @function isReady
         * @public
         */

        $scope.isReady = function () {
            var user = $scope.user;

            var val =

                // Vérification du nom d'utilisateur/adresse mail

                user.login != undefined && user.login.length > 0 && $scope.loginForm.login.$valid && 

                // Vérification du mot de passe

                user.password != undefined && user.password.length > 0 && $scope.loginForm.password.$valid;

            return val;
        };

        /**
         * Connecte l'utilisateur si les identifiants sont corrects
         * @function login
         * @public
         */

        $scope.login = function () {
            daoManager.login($scope.user).then(function (response) {
                if (Array.isArray(response.data)) {
                    $rootScope.isLog = true;
                    toastManager.showSimpleToast($filter('translate')('LOGIN_SUCCESS'), 'success');
                    dialogManager.closeDialogs();
                }
                else {
                    $scope.wrongLogin = $scope.user.login;
                    $scope.wrongPassword = $scope.user.password;
                    $scope.loginForm.login.$setValidity('wrong', false);
                    $scope.loginForm.password.$setValidity('wrong', false);
                }
            });
        };

        /**
         * Initialise la popin d'identification partie connexion
         * @function init
         * @private
         */

        function init () {
            
        };

        init();

    }]);