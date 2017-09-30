/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module du service de gestion des requêtes de base de données
 */

var daoService = angular.module('daoService', []);

/**
 * Service de gestion des requêtes de base de données
 */

daoService.service('daoManager', [
    '$http',
    'appConfig',
    function (
        $http,
        appConfig
    ) {

        var self = this;

        /**
         * Connecte un utilisateur
         * @function login
         * @public
         * @param {Objet} userToLogin Utilisateur à connecter
         * @return {Promesse} Promesse de la requête
         */

        self.login = function (userToLogin) {
            var params = {
                user: userToLogin
            };
            return request('login', 'POST', params);
        };

        /**
         * Enregistre un utilisateur
         * @function register
         * @public
         * @param {Objet} userToRegister Utilisateur à enregistrer
         * @return {Promesse} Promesse de la requête
         */

        self.register = function (userToRegister) {
            var params = {
                user: userToRegister
            };
            return request('register', 'POST', params);
        };

        /**
         * Vérifie si un utilisateur existe déja
         * @function checkSame
         * @public
         * @param {Objet} fieldToCheck Champ à vérifier
         * @param {} value Valeur
         * @return {Promesse} Promesse de la requête
         */

        self.checkSame = function (fieldToCheck, value) {
            var params = {};
            switch(fieldToCheck) {

                case 'username' :
                    params.username = value;
                    break;

                case 'login' :
                    params.login = value;
                    break;

                case 'email' :
                    params.email = value;
                    break;
            }
            return request('check_same', 'POST', params);
        };

        /**
         * Récupère l'ensemble des serveurs
         * @function getServers
         * @public
         * @return {Promesse} Promesse de la requête
         */

        self.getServers = function () {
            return request('get_servers', 'GET');
        };

        /**
         * Récupère l'ensemble des dimensions
         * @function getDimensions
         * @public
         * @return {Promesse} Promesse de la requête
         */

        self.getDimensions = function () {
            return request('get_dimensions', 'GET');
        };

        /**
         * Récupère un portail avec son identifiant
         * @function getPortalById
         * @public
         * @param {Objet} portalId Identifiant du portail
         * @return {Promesse} Promesse de la requête
         */

        self.getPortalById = function (portalId) {
            var params = {
                id: portalId
            };
            return request('get_portal_by_id', 'POST', params);
        };

        /**
         * Récupère un utilisateur avec son identifiant
         * @function getUserById
         * @public
         * @param {Objet} userId Identifiant de l'utilisateur
         * @return {Promesse} Promesse de la requête
         */

        self.getUserById = function (userId) {
            var params = {
                id: userId
            };
            return request('get_user_by_id', 'POST', params);
        };

        /**
         * Récupère les modificateurs avec l'identifiant de la dimension
         * @function getModifiersByDimensionId
         * @public
         * @param {Objet} dimensionId Identifiant de la dimension
         * @return {Promesse} Promesse de la requête
         */

        self.getModifiersByDimensionId = function (dimensionId) {
            var params = {
                dimension_id: dimensionId
            };
            return request('get_modifiers_by_dimension_id', 'POST', params);
        };

        /**
         * Récupère les portals avec l'identifiant du serveur
         * @function getPortalsByServerId
         * @public
         * @param {Objet} serverId Identifiant du serveur
         * @return {Promesse} Promesse de la requête
         */

        self.getPortalsByServerId = function (serverId) {
            var params = {
                server_id: serverId
            };
            return request('get_portals_by_server_id', 'POST', params);
        };

        

        /**
         * Envoi d'une requête http
         * @function request
         * @private
         * @param {Caractères} fileName Nom du fichier sans l'extension
         * @param {Caractères} method Méthode de la requête ('POST' ou 'GET')
         * @param {Objet} params Paramètres de la requête
         * @return Promesse de la requête
         */

        function request(fileName, method, params) {
            var config = {
                url: appConfig.paths.php + fileName + '.php',
                method: method
            };

            if(method == 'POST') {
                config.data = params;
            }
            else {
                config.params = params;
            }

            return $http(config);
        };

    }]);