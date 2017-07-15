/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module du service de gestion des langues
 */

var languageService = angular.module('languageService', []);

/**
 * Service de gestion des langues
 */

languageService.service('languageManager', [
    'tmhDynamicLocale',
    '$translate',
    '$window',
    'localStorageManager', 
    function (
        tmhDynamicLocale,
        $translate,
        $window,
        localStorageManager) {

        /**
         * Liste des langues
         * @private
         */

        var languages = [
            {
                'name': 'Français',
                'id': 'fr'
            },
            {
                'name': 'English',
                'id': 'en'
            }];

        /**
         * Récupère l'identifiant de la langue actuelle
         * @function getCurrentLanguageId
         * @public
         * @return {Caractères} Identifiant de la langue actuelle sous le format : 'fr'
         */

        this.getCurrentLanguageId = function () {
            if (!$window.localStorage.getItem('languageId')) {
                this.setCurrentLanguageId('fr');
            }
            else {
                return $window.localStorage.getItem('languageId');
            }
        }

        /**
         * Récupère la liste des langues
         * @function getLanguages
         * @public
         * @return Liste des langues
         */

        this.getLanguages = function () {
            return languages;
        }

        /**
         * Initialise la langue actuelle par rapport à celle stockée dans le localStorage
         * @function initCurrentLanguage
         * @public
         */

        this.initCurrentLanguage = function () {
            if (!$window.localStorage.getItem('languageId')) {
                this.setCurrentLanguageId('fr');
            }
            else {
                this.setCurrentLanguageId($window.localStorage.getItem('languageId'));
            }
        }

        /**
         * Modifie la langue actuelle
         * @function setCurrentLanguageId
         * @public 
         * @param {Caractères} id Identifiant de la nouvelle langue sous le format : 'fr'
         */

        this.setCurrentLanguageId = function (id) {
            var isFound = false;
            languages.forEach(function (language) {
                if (language.id == id) {
                    isFound = true;
                }
            });
            if (!isFound) {
                id = 'fr';
            }
            $translate.use(id);
            tmhDynamicLocale.set(id);
            $window.localStorage.setItem('languageId', id);
        };

    }]);