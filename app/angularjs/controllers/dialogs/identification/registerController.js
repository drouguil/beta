/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module de la popin d'identification partie inscription
 */

let registerCtrl = angular.module('registerCtrl', []);

/**
 * Configuration du module de la popin d'identification partie inscription
 */

registerCtrl.config([
    '$translateProvider',
    function (
        $translateProvider) {

        /**
         * Dictionnaire Français
         */

        $translateProvider.translations('fr', {
            USERNAME_LABEL: 'Pseudo',
            LOGIN_LABEL: 'Nom d\'utilisateur',
            PASSWORD_LABEL: 'Mot de passe',
            CONFIRM_PASSWORD_LABEL: 'Confirmation du mot de passe',
            SERVER_LABEL: 'Serveur principal',
            EMAIL_LABEL: 'Adresse mail',
            REQUIRED_ERROR: 'Champ requis',
            PASSWORDS_EQUALS_ERROR: 'Les mots de passe ne correspondent pas',
            EMAIL_ERROR: 'Adresse mail invalide',
            REGISTER_BTN: 'S\'inscrire',
            REGISTER_SUCCESS: 'Inscription réussie',
            REGISTER_ERROR: 'Une erreur est survenue lors de l\'inscription',
            MAXLENGTH_USERNAME_ERROR: 'Pseudo trop long',
            MAXLENGTH_LOGIN_ERROR: 'Nom d\'utilisateur trop long',
            MINLENGTH_PASSWORD_ERROR: '6 caractères minimum',
            MAXLENGTH_PASSWORD_ERROR: 'Mot de passe trop long',
            SAME_USERNAME_ERROR: 'Pseudo déjà pris',
            SAME_LOGIN_ERROR: 'Nom d\'utilisateur déjà pris',
            SAME_EMAIL_ERROR: 'Adresse mail déjà prise',

            // Serveurs

            AGRIDE: 'Agride',
            ATCHAM: 'Atcham',
            BETA_1: 'Bêta 1',
            BETA_2: 'Bêta 2',
            BRUMEN: 'Brumen',
            CROCABULIA: 'Crocabulia',
            ECHO: 'Echo',
            FURYE: 'Furye',
            ILYZAELLE: 'Ilyzaelle',
            MERIANA: 'Meriana',
            MERKATOR: 'Merkator',
            NIDAS: 'Nidas',
            OTO_MUSTAM: 'Oto Mustam',
            PANDORE: 'Pandore',
            RUBILAX: 'Rubilax',
            SHADOW: 'Ombre'
        });

        /**
         * Dictionnaire Anglais
         */

        $translateProvider.translations('en', {
            USERNAME_LABEL: 'Nickname',
            LOGIN_LABEL: 'Username',
            PASSWORD_LABEL: 'Password',
            CONFIRM_PASSWORD_LABEL: 'Password\'s confirm',
            SERVER_LABEL: 'Main server',
            EMAIL_LABEL: 'Email',
            REQUIRED_ERROR: 'Input required',
            PASSWORDS_EQUALS_ERROR: 'Passwords aren\'t equals',
            EMAIL_ERROR: 'Email not valid',
            REGISTER_BTN: 'Sign up',
            REGISTER_SUCCESS: 'Successful register',
            REGISTER_ERROR: 'An error has occured during the registration',
            MAXLENGTH_USERNAME_ERROR: 'Nickname too long',
            MAXLENGTH_LOGIN_ERROR: 'Username too long',
            MINLENGTH_PASSWORD_ERROR: '6 characters minimum',
            MAXLENGTH_PASSWORD_ERROR: 'Password too long',
            SAME_USERNAME_ERROR: 'Nickname already used',
            SAME_LOGIN_ERROR: 'Username already used',
            SAME_EMAIL_ERROR: 'Email already used',

            // Serveurs

            AGRIDE: 'Agride',
            ATCHAM: 'Atcham',
            BETA_1: 'Bêta 1',
            BETA_2: 'Bêta 2',
            BRUMEN: 'Brumen',
            CROCABULIA: 'Crocabulia',
            ECHO: 'Echo',
            FURYE: 'Furye',
            ILYZAELLE: 'Ilyzaelle',
            MERIANA: 'Meriana',
            MERKATOR: 'Merkator',
            NIDAS: 'Nidas',
            OTO_MUSTAM: 'Oto Mustam',
            PANDORE: 'Pandore',
            RUBILAX: 'Rubilax',
            SHADOW: 'Shadow'
        });
    }]);

/**
 * Contrôleur du module de la popin d'identification partie inscription
 */

registerCtrl.controller('registerController', [
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
            username: undefined,
            login: undefined,
            password: undefined,
            confirmPassword: undefined,
            email: undefined,
            server: undefined
        };

        /**
         * Liste des serveurs de jeu
         * @public
         */

        $scope.servers = [];

        /**
         * Détermine si tous les champs du formulaire d'inscription sont valides
         * @function isReady
         * @public
         * @return {Booléen} Validité du formulaire (true -> Valide, false -> Invalide)
         */

        $scope.isReady = function () {
            let user = $scope.user;

            let val =

                // Vérification du pseudo

                user.username != undefined && user.username.length > 0 && user.username.length <= 30 && $scope.registerForm.username.$valid &&

                // Vérification du nom d'utilisateur

                user.login != undefined && user.login.length > 0 && user.login.length <= 30 && $scope.registerForm.login.$valid &&

                // Vérification du mot de passe

                user.password != undefined && user.password.length >= 6 && user.password.length <= 30 && $scope.registerForm.password.$valid &&

                // Vérification de la confirmation du mot de passe

                user.password == user.confirmPassword && $scope.registerForm.confirmPassword.$valid &&

                // Vérification de l'adresse mail

                $scope.registerForm.email.$valid &&

                // Vérification du serveur

                user.server != undefined && $scope.registerForm.server.$valid;

            return val;
        };

        /**
         * Vérifie si la valeur d'un champ unique n'est pas déjà utilisé par un autre utilisateur 
         * @function checkSame
         * @public
         * @param {Caractères} field champ que l'on veut vérifier ('username', 'login', 'email')
         */

        $scope.checkSame = function (field) {
            switch (field) {
                case 'username':

                    if ($scope.user.username != undefined && $scope.user.username.length > 0 && $scope.user.username.length <= 30) {
                        daoManager.checkSame('username', $scope.user.username).then(function (response) {
                            if (response.data != 'ok') {
                                $scope.registerForm.username.$setValidity('same', false);
                            }
                            else {
                                $scope.registerForm.username.$setValidity('same', true);
                            }
                        });
                    }
                    break;

                case 'login':

                    if ($scope.user.login != undefined && $scope.user.login.length > 0 && $scope.user.login.length <= 30) {
                        daoManager.checkSame('login', $scope.user.login).then(function (response) {
                            if (response.data != 'ok') {
                                $scope.registerForm.login.$setValidity('same', false);
                            }
                            else {
                                $scope.registerForm.login.$setValidity('same', true);
                            }
                        });
                    }
                    break;

                case 'email':

                    if ($scope.user.email != undefined && $scope.user.email.length > 0) {
                        daoManager.checkSame('email', $scope.user.email).then(function (response) {
                            if (response.data != 'ok') {
                                $scope.registerForm.email.$setValidity('same', false);
                            }
                            else {
                                $scope.registerForm.email.$setValidity('same', true);
                            }
                        });
                    }
                    break;
            }
        };

        /**
         * Inscrit l'utilisateur si les données sont valides
         * @function register
         * @public
         */

        $scope.register = function () {
            daoManager.register($scope.user).then(function (response) {
                if (response.data == 'ok') {
                    toastManager.showSimpleToast($filter('translate')('REGISTER_SUCCESS'), 'success');
                    $rootScope.$broadcast('changeForm');
                }
                else {
                    toastManager.showSimpleToast($filter('translate')('REGISTER_ERROR'), 'error');
                }
            });
        };

        /**
         * Initialise la popin d'identification partie inscription
         * @function init
         * @private
         */

        function init() {

            // Récupération des serveurs
            
            daoManager.getServers().then(function (response) {
                response.data.forEach(function(data) {
                    
                    let server = {
                        id : data['id'],
                        name: data['name']
                    }

                    $scope.servers.push(server);
                    
                });
            });
        };

        /**
         * Initialise la popin d'identification partie inscription
         */

        init();

    }]);