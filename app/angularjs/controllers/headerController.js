'use strict';
var headerApp = angular.module('headerApp', []);

headerApp.controller('headerController', [
    '$scope',
    '$locale',
    'tmhDynamicLocale',
    'languageManager',
    function ($scope, $locale, tmhDynamicLocale, languageManager) {

        $scope.isLanguagesList = false;

        $scope.displayLanguageList = function(value) {
            $scope.isLanguagesList = value;
        }

        $scope.languages = [
            {
                'name': 'Français',
                'id': 'fr'
            },
            {
                'name': 'English',
                'id': 'en'
            }];

        $scope.currentLanguage = $scope.languages[0];

        $scope.updateLanguage = function (languageSelected) {
            $scope.currentLanguage = languageSelected;
            languageManager.changeLanguage(languageSelected.id);
        }
    }]);