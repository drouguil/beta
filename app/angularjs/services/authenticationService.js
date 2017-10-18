/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module du service d'authentification
 */

let authenticationService = angular.module('authenticationService', []);

/**
 * Service de gestion des requêtes de base de données
 */

authenticationService.service('authenticationManager', [
    '$rootScope',
    '$http',
    'sessionStorageManager',
    'appConfig',
    function (
        $rootScope,
        $http,
        sessionStorageManager,
        appConfig
    ) {

        /**
         * Référence sur le service
         * @private
         */

        var self = this;

        /**
         * Connecte l'utilisateur
         * @function login
         * @public
         * @param {Caractères} authToken Jeton d'authentification
         */

        self.login = function (authToken) {

            // Initialise le jeton d'authentification

            $http.defaults.headers.common['Authorization'] = authToken;

            sessionStorageManager.setObj(appConfig.sessionStorage.authToken, authToken);

            console.log(sessionStorageManager.getObj(appConfig.sessionStorage.authToken));

            // Prévient l'application qu'un utilisateur est connecté

            $rootScope.isLog = true;
        };

        /**
         * Déconnecte l'utilisateur
         */

        self.logout = function () {

            delete $http.defaults.headers.common['Authorization'];

            sessionStorageManager.removeObj(appConfig.sessionStorage.authToken);

            // Prévient l'application que l'utilisateur n'est plus connecté

            $rootScope.isLog = false;
        }

        self.initLogin = function () {
            let authToken = sessionStorageManager.getObj((appConfig.sessionStorage.authToken));
            if(authToken) {
                self.login(authToken);
            }
        }
    }]);