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
    'localStorageManager',
    'appConfig',
    function (
        tmhDynamicLocale,
        $translate,
        localStorageManager,
        appConfig) {

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
         * @function getCurrentLanguage
         * @public
         * @return {Objet} Langue actuelle sous le format
         */

        this.getCurrentLanguage = function () {
            if (!localStorageManager.getObj(appConfig.localStorage.languageName)) {
                this.setCurrentLanguage(languages[0]);
            }
            return localStorageManager.getObj(appConfig.localStorage.languageName);
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
            if (!localStorageManager.getObj(appConfig.localStorage.languageName)) {
                this.setCurrentLanguage(languages[0]);
            }
            else {
                this.setCurrentLanguage(localStorageManager.getObj(appConfig.localStorage.languageName));
            }
        }

        /**
         * Modifie la langue actuelle
         * @function setCurrentLanguage
         * @public 
         * @param {Objet} language Nouvelle langue
         */

        this.setCurrentLanguage = function (language) {
            if (language) {
                var isFound = false;
                languages.forEach(function (tempLanguage) {
                    if (tempLanguage.id == language.id) {
                        isFound = true;
                    }
                });
                if (!isFound) {
                    language = languages[0];
                }
                $translate.use(language.id);
                tmhDynamicLocale.set(language.id);
                localStorageManager.setObj(appConfig.localStorage.languageName, language);
            }
            else {
                console.error('La langue n\'est pas définie');
            }
        };

    }]);