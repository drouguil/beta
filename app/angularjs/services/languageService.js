'use strict';
var languageService = angular.module('languageService', []);

languageService.service('languageManager', ['tmhDynamicLocale', '$translate', '$window', function (tmhDynamicLocale, $translate, $window) {

    this.languages = [
        {
            'name': 'Français',
            'id': 'fr'
        },
        {
            'name': 'English',
            'id': 'en'
        }];

    /**
     * Retourne l'identifiant du langage actuel
     */

    this.getCurrentLanguageId = function() {
        if(!$window.localStorage.getItem('languageId'))
        {
            this.setCurrentLanguageId('fr');
        }
        else
        {
            return $window.localStorage.getItem('languageId');
        }
    }

    /**
     * Retourne la liste des langages
     */

    this.getLanguages = function() {
        return this.languages;
    }

    /**
     * Initialise le langage actuel par rapport à celui stocké dans le localStorage
     */

    this.initCurrentLanguage = function() {
        if(!$window.localStorage.getItem('languageId'))
        {
            this.setCurrentLanguageId('fr');
        }
        else
        {
            this.setCurrentLanguageId($window.localStorage.getItem('languageId'));
        }
    }

    /**
     * Modifie le langage actuel
     */

    this.setCurrentLanguageId = function (id) {
        var isFound = false;
        this.languages.forEach(function (language) {
            if(language.id == id)
            {
                isFound = true;
            }
        });
        if(!isFound)
        {
            id = 'fr';
        }
        $translate.use(id);
        tmhDynamicLocale.set(id);
        $window.localStorage.setItem('languageId',id);
    };

}]);