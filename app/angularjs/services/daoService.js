/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module du service de gestion des requêtes de base de données
 */

let daoService = angular.module('daoService', []);

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

        /**
         * Référence sur le service
         * @private
         */

        var self = this;

        /**
         * Connecte un utilisateur
         * @function login
         * @public
         * @param {Objet} userToLogin Utilisateur à connecter
         * @return {Promesse} Promesse de la requête
         */

        self.login = function (userToLogin) {
            if (userToLogin) {
                let params = {
                    user: userToLogin
                };
                return request('login', 'POST', params);
            }
            else {
                return Promise.reject(new Error('L\'utilisateur est manquant'));
            }
        };

        /**
         * Enregistre un utilisateur
         * @function register
         * @public
         * @param {Objet} userToRegister Utilisateur à enregistrer
         * @return {Promesse} Promesse de la requête
         */

        self.register = function (userToRegister) {
            if (userToRegister) {
                let params = {
                    user: userToRegister
                };
                return request('register', 'POST', params);
            }
            else {
                return Promise.reject(new Error('L\'utilisateur est manquant'));
            }
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
            if (fieldToCheck && value) {
                let params = {};
                switch (fieldToCheck) {

                    case 'username':
                        params.username = value;
                        break;

                    case 'login':
                        params.login = value;
                        break;

                    case 'email':
                        params.email = value;
                        break;
                }
                return request('check_same', 'POST', params);
            }
            else {
                return Promise.reject(new Error('Le champ a vérifier et/ou sa valeur est manquant'));
            }
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
         * Modifie un portail
         * @function updatePortal
         * @public
         * @param {Objet} portalToUpdate Portail à modifier
         * @return {Promesse} Promesse de la requête
         */

        self.updatePortal = function (portalToUpdate) {
            if (portalToUpdate) {
                let params = {
                    portal: portalToUpdate
                };
                return request('update_portal', 'POST', params);
            }
            else {
                return Promise.reject(new Error('Le portail est manquant'));
            }
        };

        /**
         * Récupère l'utilisateur connecté
         * @function getConnectedUser
         * @public
         * @return {Promesse} Promesse de la requête
         */

        self.getConnectedUser = function () {
            return request('get_connected_user', 'GET');
        };

        /**
         * Récupère les droits de l'utilisateur connecté
         * @function getConnectedUserRight
         * @public
         * @return {Promesse} Promesse de la requête
         */

        self.getConnectedUserRight = function () {
            return request('get_connected_user_right', 'GET');
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
         * Récupère l'ensemble des utilisateurs
         * @function getUsers
         * @public
         * @return {Promesse} Promesse de la requête
         */

        self.getUsers = function () {
            return request('get_users', 'GET');
        };

        /**
         * Récupère un portail avec son identifiant
         * @function getPortalById
         * @public
         * @param {Objet} portalId Identifiant du portail
         * @return {Promesse} Promesse de la requête
         */

        self.getPortalById = function (portalId) {
            if (portalId) {
                let params = {
                    id: portalId
                };
                return request('get_portal_by_id', 'POST', params);
            }
            else {
                return Promise.reject(new Error('L\'identifiant du portail est manquant'));
            }
        };

        /**
         * Récupère un utilisateur avec son identifiant
         * @function getUserById
         * @public
         * @param {Objet} userId Identifiant de l'utilisateur
         * @return {Promesse} Promesse de la requête
         */

        self.getUserById = function (userId) {
            if (userId) {
                let params = {
                    id: userId
                };
                return request('get_user_by_id', 'POST', params);
            }
            else {
                return Promise.reject(new Error('L\'identifiant de l\'utilisateur est manquant'));
            }
        };

        /**
         * Récupère les modificateurs avec l'identifiant de la dimension
         * @function getModifiersByDimensionId
         * @public
         * @param {Objet} dimensionId Identifiant de la dimension
         * @return {Promesse} Promesse de la requête
         */

        self.getModifiersByDimensionId = function (dimensionId) {
            if (dimensionId) {
                let params = {
                    dimension_id: dimensionId
                };
                return request('get_modifiers_by_dimension_id', 'POST', params);
            }
            else {
                return Promise.reject(new Error('L\'identifiant de la dimension est manquant'));
            }
        };

        /**
         * Récupère les portals avec l'identifiant du serveur
         * @function getPortalsByServerId
         * @public
         * @param {Objet} serverId Identifiant du serveur
         * @return {Promesse} Promesse de la requête
         */

        self.getPortalsByServerId = function (serverId) {
            if (serverId) {
                let params = {
                    server_id: serverId
                };
                return request('get_portals_by_server_id', 'POST', params);
            }
            else {
                return Promise.reject(new Error('L\'identifiant du serveur est manquant'));
            }

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
            if(fileName) {

                let config = {
                    url: appConfig.paths.php + fileName + '.php'
                };

                if(method) {
                    config.method = method;
                }
                else {
                    config.method = 'GET';
                }

                if(params) {
                    if (method == 'POST') {
                        config.data = params;
                    }
                    else {
                        config.params = params;
                    }
                }
    
                return $http(config);
            }
            else {
                return Promise.reject(new Error('Le nom du fichier est manquant'));
            }
        };

    }]);