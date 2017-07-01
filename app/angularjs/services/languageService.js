'use strict';
var languageService = angular.module('languageService', []);

languageService.service('languageManager', ['tmhDynamicLocale', '$translate', function (tmhDynamicLocale, $translate) {

    this.languages = [
        {
            'name': 'Français',
            'id': 'fr'
        },
        {
            'name': 'English',
            'id': 'en'
        }];

    this.currentLanguage = this.languages[0];

    this.changeLanguage = function (id) {
        this.currentLanguage = this.languages[0];
        var tempLanguage = this.languages[0];
        var isFound = false;
        this.languages.forEach(function (language) {
            if(language.id == id)
            {
                isFound = true;
                tempLanguage = language;
            }
        });
        if(!isFound)
        {
            id = 'fr';
        }
        this.currentLanguage = tempLanguage;
        $translate.use(id);
        tmhDynamicLocale.set(id);  
    };
}]);